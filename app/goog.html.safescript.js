goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeScript");
  goog.module.declareLegacyNamespace();
  var Const = goog.require("goog.string.Const");
  var TypedString = goog.require("goog.string.TypedString");
  var trustedtypes = goog.require("goog.html.trustedtypes");
  var $jscomp$destructuring$var0 = goog.require("goog.asserts");
  var fail = $jscomp$destructuring$var0.fail;
  var CONSTRUCTOR_TOKEN_PRIVATE = {};
  var SafeScript = function(value, token) {
    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
    this.implementsGoogStringTypedString = true;
  };
  SafeScript.prototype.toString = function() {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
  };
  SafeScript.fromConstant = function(script) {
    var scriptString = Const.unwrap(script);
    if (scriptString.length === 0) {
      return SafeScript.EMPTY;
    }
    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(scriptString);
  };
  SafeScript.fromJson = function(val) {
    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(SafeScript.stringify_(val));
  };
  SafeScript.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
  };
  SafeScript.unwrap = function(safeScript) {
    return SafeScript.unwrapTrustedScript(safeScript).toString();
  };
  SafeScript.unwrapTrustedScript = function(safeScript) {
    if (safeScript instanceof SafeScript && safeScript.constructor === SafeScript) {
      return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;
    } else {
      fail("expected object of type SafeScript, got '" + safeScript + "' of type " + goog.typeOf(safeScript));
      return "type_error:SafeScript";
    }
  };
  SafeScript.stringify_ = function(val) {
    var json = JSON.stringify(val);
    return json.replace(/</g, "\\x3c");
  };
  SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(script) {
    var noinlineScript = script;
    var policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();
    var trustedScript = policy ? policy.createScript(noinlineScript) : noinlineScript;
    return new SafeScript(trustedScript, CONSTRUCTOR_TOKEN_PRIVATE);
  };
  SafeScript.EMPTY = {valueOf:function() {
    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
  }}.valueOf();
  exports = SafeScript;
  return exports;
});

//# sourceMappingURL=goog.html.safescript.js.map
