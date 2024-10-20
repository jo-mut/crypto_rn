goog.loadModule(function(exports) {
  function AssertionError(messagePattern, messageArgs) {
    DebugError.call(this, subs(messagePattern, messageArgs));
    this.messagePattern = messagePattern;
  }
  function subs(pattern, subs) {
    var splitParts = pattern.split("%s");
    var returnString = "";
    var subLast = splitParts.length - 1;
    var i = 0;
    for (; i < subLast; i++) {
      var sub = i < subs.length ? subs[i] : "%s";
      returnString = returnString + (splitParts[i] + sub);
    }
    return returnString + splitParts[subLast];
  }
  function doAssertFailure(defaultMessage, defaultArgs, givenMessage, givenArgs) {
    var message = "Assertion failed";
    var args;
    if (givenMessage) {
      message = message + (": " + givenMessage);
      args = givenArgs;
    } else if (defaultMessage) {
      message = message + (": " + defaultMessage);
      args = defaultArgs;
    }
    var e = new AssertionError("" + message, args || []);
    errorHandler_(e);
  }
  function getType(value) {
    if (value instanceof Function) {
      return value.displayName || value.name || "unknown type name";
    } else if (value instanceof Object) {
      return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
    } else {
      return value === null ? "null" : typeof value;
    }
  }
  "use strict";
  goog.module("goog.asserts");
  goog.module.declareLegacyNamespace();
  var DebugError = goog.require("goog.debug.Error");
  var NodeType = goog.require("goog.dom.NodeType");
  exports.ENABLE_ASSERTS = goog.define("goog.asserts.ENABLE_ASSERTS", goog.DEBUG);
  goog.inherits(AssertionError, DebugError);
  exports.AssertionError = AssertionError;
  AssertionError.prototype.name = "AssertionError";
  exports.DEFAULT_ERROR_HANDLER = function(e) {
    throw e;
  };
  var errorHandler_ = exports.DEFAULT_ERROR_HANDLER;
  exports.setErrorHandler = function(errorHandler) {
    if (exports.ENABLE_ASSERTS) {
      errorHandler_ = errorHandler;
    }
  };
  exports.assert = function(condition, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && !condition) {
      doAssertFailure("", null, opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return condition;
  };
  exports.assertExists = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && value == null) {
      doAssertFailure("Expected to exist: %s.", [value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.fail = function(opt_message, var_args) {
    if (exports.ENABLE_ASSERTS) {
      errorHandler_(new AssertionError("Failure" + (opt_message ? ": " + opt_message : ""), Array.prototype.slice.call(arguments, 1)));
    }
  };
  exports.assertNumber = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && typeof value !== "number") {
      doAssertFailure("Expected number but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertString = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && typeof value !== "string") {
      doAssertFailure("Expected string but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertFunction = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && typeof value !== "function") {
      doAssertFailure("Expected function but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertObject = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && !goog.isObject(value)) {
      doAssertFailure("Expected object but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertArray = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && !Array.isArray(value)) {
      doAssertFailure("Expected array but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertBoolean = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && typeof value !== "boolean") {
      doAssertFailure("Expected boolean but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertElement = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && (!goog.isObject(value) || value.nodeType != NodeType.ELEMENT)) {
      doAssertFailure("Expected Element but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  exports.assertInstanceof = function(value, type, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && !(value instanceof type)) {
      doAssertFailure("Expected instanceof %s but got %s.", [getType(type), getType(value)], opt_message, Array.prototype.slice.call(arguments, 3));
    }
    return value;
  };
  exports.assertFinite = function(value, opt_message, var_args) {
    if (exports.ENABLE_ASSERTS && (typeof value != "number" || !isFinite(value))) {
      doAssertFailure("Expected %s to be a finite number but it is not.", [value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  return exports;
});

//# sourceMappingURL=goog.asserts.asserts.js.map
