goog.loadModule(function(exports) {
  function disposeAll(var_args) {
    var i = 0;
    var len = arguments.length;
    for (; i < len; ++i) {
      var disposable = arguments[i];
      if (goog.isArrayLike(disposable)) {
        disposeAll.apply(null, disposable);
      } else {
        dispose(disposable);
      }
    }
  }
  "use strict";
  goog.module("goog.disposeAll");
  goog.module.declareLegacyNamespace();
  var dispose = goog.require("goog.dispose");
  exports = disposeAll;
  return exports;
});

//# sourceMappingURL=goog.disposable.disposeall.js.map
