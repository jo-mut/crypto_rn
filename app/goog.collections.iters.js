goog.loadModule(function(exports) {
  function getIterator(iterable) {
    return iterable[goog.global.Symbol.iterator]();
  }
  function forEach(iterator, f) {
    var result;
    for (; !(result = iterator.next()).done;) {
      f(result.value);
    }
  }
  "use strict";
  goog.module("goog.collections.iters");
  goog.module.declareLegacyNamespace();
  exports.getIterator = getIterator;
  exports.forEach = forEach;
  var MapIterator = function(childIter, mapFn) {
    this.childIterator_ = getIterator(childIter);
    this.mapFn_ = mapFn;
  };
  MapIterator.prototype[Symbol.iterator] = function() {
    return this;
  };
  MapIterator.prototype.next = function() {
    var childResult = this.childIterator_.next();
    return {value:childResult.done ? undefined : this.mapFn_.call(undefined, childResult.value), done:childResult.done};
  };
  exports.map = function(iterable, f) {
    return new MapIterator(iterable, f);
  };
  var FilterIterator = function(childIter, filterFn) {
    this.childIter_ = getIterator(childIter);
    this.filterFn_ = filterFn;
  };
  FilterIterator.prototype[Symbol.iterator] = function() {
    return this;
  };
  FilterIterator.prototype.next = function() {
    for (; true;) {
      var childResult = this.childIter_.next();
      if (childResult.done) {
        return {done:true, value:undefined};
      }
      var passesFilter = this.filterFn_.call(undefined, childResult.value);
      if (passesFilter) {
        return childResult;
      }
    }
  };
  exports.filter = function(iterable, f) {
    return new FilterIterator(iterable, f);
  };
  var ConcatIterator = function(iterators) {
    this.iterators_ = iterators;
    this.iterIndex_ = 0;
  };
  ConcatIterator.prototype[Symbol.iterator] = function() {
    return this;
  };
  ConcatIterator.prototype.next = function() {
    for (; this.iterIndex_ < this.iterators_.length;) {
      var result = this.iterators_[this.iterIndex_].next();
      if (!result.done) {
        return result;
      }
      this.iterIndex_++;
    }
    return {done:true};
  };
  exports.concat = function() {
    var iterables = $jscomp.getRestArguments.apply(0, arguments);
    return new ConcatIterator(iterables.map(getIterator));
  };
  exports.toArray = function(iterator) {
    var arr = [];
    forEach(iterator, function(e) {
      return arr.push(e);
    });
    return arr;
  };
  return exports;
});

//# sourceMappingURL=goog.collections.iters.js.map
