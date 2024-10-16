goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.iter.es6");
  goog.module.declareLegacyNamespace();
  var GoogIterable = goog.require("goog.iter.Iterable");
  var GoogIterator = goog.require("goog.iter.Iterator");
  var ShimIterable = function() {
  };
  ShimIterable.prototype.__iterator__ = function() {
  };
  ShimIterable.prototype.toGoog = function() {
  };
  ShimIterable.prototype.toEs6 = function() {
  };
  ShimIterable.of = function(iter) {
    if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator || iter instanceof ShimEs6Iterator) {
      return iter;
    } else if (typeof iter.next == "function") {
      return new ShimIterableImpl(function() {
        return iter;
      });
    } else if (typeof iter[Symbol.iterator] == "function") {
      return new ShimIterableImpl(function() {
        return iter[Symbol.iterator]();
      });
    } else if (typeof iter.__iterator__ == "function") {
      return new ShimIterableImpl(function() {
        return iter.__iterator__();
      });
    }
    throw new Error("Not an iterator or iterable.");
  };
  var ShimIterableImpl = function(func) {
    this.func_ = func;
  };
  ShimIterableImpl.prototype.__iterator__ = function() {
    return new ShimGoogIterator(this.func_());
  };
  ShimIterableImpl.prototype.toGoog = function() {
    return new ShimGoogIterator(this.func_());
  };
  ShimIterableImpl.prototype[Symbol.iterator] = function() {
    return new ShimEs6Iterator(this.func_());
  };
  ShimIterableImpl.prototype.toEs6 = function() {
    return new ShimEs6Iterator(this.func_());
  };
  var ShimGoogIterator = function(iter) {
    var $jscomp$super$this;
    $jscomp$super$this = GoogIterator.call(this) || this;
    $jscomp$super$this.iter_ = iter;
    return $jscomp$super$this;
  };
  $jscomp.inherits(ShimGoogIterator, GoogIterator);
  ShimGoogIterator.prototype.next = function() {
    return this.iter_.next();
  };
  ShimGoogIterator.prototype.toGoog = function() {
    return this;
  };
  ShimGoogIterator.prototype[Symbol.iterator] = function() {
    return new ShimEs6Iterator(this.iter_);
  };
  ShimGoogIterator.prototype.toEs6 = function() {
    return new ShimEs6Iterator(this.iter_);
  };
  var ShimEs6Iterator = function(iter) {
    var $jscomp$super$this;
    $jscomp$super$this = ShimIterableImpl.call(this, function() {
      return iter;
    }) || this;
    $jscomp$super$this.iter_ = iter;
    return $jscomp$super$this;
  };
  $jscomp.inherits(ShimEs6Iterator, ShimIterableImpl);
  ShimEs6Iterator.prototype.next = function() {
    return this.iter_.next();
  };
  exports = {ShimIterable:ShimIterable, ShimEs6Iterator:ShimEs6Iterator, ShimGoogIterator:ShimGoogIterator};
  return exports;
});

//# sourceMappingURL=goog.iter.es6.js.map
