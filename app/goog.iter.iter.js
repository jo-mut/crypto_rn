goog.provide("goog.iter");
goog.provide("goog.iter.Iterable");
goog.provide("goog.iter.Iterator");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.debug");
goog.require("goog.functions");
goog.require("goog.math");
goog.iter.Iterable;
goog.iter.Iterator = function() {
};
goog.iter.Iterator.prototype.next = function() {
  return goog.iter.ES6_ITERATOR_DONE;
};
goog.iter.ES6_ITERATOR_DONE = goog.debug.freeze({done:true, value:undefined});
goog.iter.createEs6IteratorYield = function(value) {
  return {value:value, done:false};
};
goog.iter.Iterator.prototype.__iterator__ = function(opt_keys) {
  return this;
};
goog.iter.toIterator = function(iterable) {
  if (iterable instanceof goog.iter.Iterator) {
    return iterable;
  }
  if (typeof iterable.__iterator__ == "function") {
    return iterable.__iterator__(false);
  }
  if (goog.isArrayLike(iterable)) {
    var like = iterable;
    var i = 0;
    var newIter = new goog.iter.Iterator();
    newIter.next = function() {
      for (; true;) {
        if (i >= like.length) {
          return goog.iter.ES6_ITERATOR_DONE;
        }
        if (!(i in like)) {
          i++;
          continue;
        }
        return goog.iter.createEs6IteratorYield(like[i++]);
      }
    };
    return newIter;
  }
  throw new Error("Not implemented");
};
goog.iter.forEach = function(iterable, f, opt_obj) {
  if (goog.isArrayLike(iterable)) {
    goog.array.forEach(iterable, f, opt_obj);
  } else {
    var iterator = goog.iter.toIterator(iterable);
    for (; true;) {
      var $jscomp$destructuring$var35 = iterator.next();
      var done = $jscomp$destructuring$var35.done;
      var value = $jscomp$destructuring$var35.value;
      if (done) {
        return;
      }
      f.call(opt_obj, value, undefined, iterator);
    }
  }
};
goog.iter.filter = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator();
  newIter.next = function() {
    for (; true;) {
      var $jscomp$destructuring$var36 = iterator.next();
      var done = $jscomp$destructuring$var36.done;
      var value = $jscomp$destructuring$var36.value;
      if (done) {
        return goog.iter.ES6_ITERATOR_DONE;
      }
      if (f.call(opt_obj, value, undefined, iterator)) {
        return goog.iter.createEs6IteratorYield(value);
      }
    }
  };
  return newIter;
};
goog.iter.filterFalse = function(iterable, f, opt_obj) {
  return goog.iter.filter(iterable, goog.functions.not(f), opt_obj);
};
goog.iter.range = function(startOrStop, opt_stop, opt_step) {
  var start = 0;
  var stop = startOrStop;
  var step = opt_step || 1;
  if (arguments.length > 1) {
    start = startOrStop;
    stop = +opt_stop;
  }
  if (step == 0) {
    throw new Error("Range step argument must not be zero");
  }
  var newIter = new goog.iter.Iterator();
  newIter.next = function() {
    if (step > 0 && start >= stop || step < 0 && start <= stop) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    var rv = start;
    start = start + step;
    return goog.iter.createEs6IteratorYield(rv);
  };
  return newIter;
};
goog.iter.join = function(iterable, deliminator) {
  return goog.iter.toArray(iterable).join(deliminator);
};
goog.iter.map = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator();
  newIter.next = function() {
    var $jscomp$destructuring$var37 = iterator.next();
    var done = $jscomp$destructuring$var37.done;
    var value = $jscomp$destructuring$var37.value;
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    var mappedVal = f.call(opt_obj, value, undefined, iterator);
    return goog.iter.createEs6IteratorYield(mappedVal);
  };
  return newIter;
};
goog.iter.reduce = function(iterable, f, val, opt_obj) {
  var rval = val;
  goog.iter.forEach(iterable, function(val) {
    rval = f.call(opt_obj, rval, val);
  });
  return rval;
};
goog.iter.some = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  for (; true;) {
    var $jscomp$destructuring$var38 = iterator.next();
    var done = $jscomp$destructuring$var38.done;
    var value = $jscomp$destructuring$var38.value;
    if (done) {
      return false;
    }
    if (f.call(opt_obj, value, undefined, iterator)) {
      return true;
    }
  }
};
goog.iter.every = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  for (; true;) {
    var $jscomp$destructuring$var39 = iterator.next();
    var done = $jscomp$destructuring$var39.done;
    var value = $jscomp$destructuring$var39.value;
    if (done) {
      return true;
    }
    if (!f.call(opt_obj, value, undefined, iterator)) {
      return false;
    }
  }
};
goog.iter.chain = function(var_args) {
  return goog.iter.chainFromIterable(arguments);
};
goog.iter.chainFromIterable = function(iterable) {
  var iteratorOfIterators = goog.iter.toIterator(iterable);
  var iter = new goog.iter.Iterator();
  var current = null;
  iter.next = function() {
    for (; true;) {
      if (current == null) {
        var it$jscomp$0 = iteratorOfIterators.next();
        if (it$jscomp$0.done) {
          return goog.iter.ES6_ITERATOR_DONE;
        }
        var value = it$jscomp$0.value;
        current = goog.iter.toIterator(value);
      }
      var it = current.next();
      if (it.done) {
        current = null;
        continue;
      }
      var value$jscomp$0 = it.value;
      return goog.iter.createEs6IteratorYield(value$jscomp$0);
    }
  };
  return iter;
};
goog.iter.dropWhile = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator();
  var dropping = true;
  newIter.next = function() {
    for (; true;) {
      var $jscomp$destructuring$var40 = iterator.next();
      var done = $jscomp$destructuring$var40.done;
      var value = $jscomp$destructuring$var40.value;
      if (done) {
        return goog.iter.ES6_ITERATOR_DONE;
      }
      if (dropping && f.call(opt_obj, value, undefined, iterator)) {
        continue;
      } else {
        dropping = false;
      }
      return goog.iter.createEs6IteratorYield(value);
    }
  };
  return newIter;
};
goog.iter.takeWhile = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  var iter = new goog.iter.Iterator();
  iter.next = function() {
    var $jscomp$destructuring$var41 = iterator.next();
    var done = $jscomp$destructuring$var41.done;
    var value = $jscomp$destructuring$var41.value;
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    if (f.call(opt_obj, value, undefined, iterator)) {
      return goog.iter.createEs6IteratorYield(value);
    }
    return goog.iter.ES6_ITERATOR_DONE;
  };
  return iter;
};
goog.iter.toArray = function(iterable) {
  if (goog.isArrayLike(iterable)) {
    return goog.array.toArray(iterable);
  }
  iterable = goog.iter.toIterator(iterable);
  var array = [];
  goog.iter.forEach(iterable, function(val) {
    array.push(val);
  });
  return array;
};
goog.iter.equals = function(iterable1, iterable2, opt_equalsFn) {
  var fillValue = {};
  var pairs = goog.iter.zipLongest(fillValue, iterable1, iterable2);
  var equalsFn = opt_equalsFn || goog.array.defaultCompareEquality;
  return goog.iter.every(pairs, function(pair) {
    return equalsFn(pair[0], pair[1]);
  });
};
goog.iter.nextOrValue = function(iterable, defaultValue) {
  var iterator = goog.iter.toIterator(iterable);
  var $jscomp$destructuring$var42 = iterator.next();
  var done = $jscomp$destructuring$var42.done;
  var value = $jscomp$destructuring$var42.value;
  if (done) {
    return defaultValue;
  }
  return value;
};
goog.iter.product = function(var_args) {
  var someArrayEmpty = Array.prototype.some.call(arguments, function(arr) {
    return !arr.length;
  });
  if (someArrayEmpty || !arguments.length) {
    return new goog.iter.Iterator();
  }
  var iter = new goog.iter.Iterator();
  var arrays = arguments;
  var indices = goog.array.repeat(0, arrays.length);
  iter.next = function() {
    if (indices) {
      var retVal = goog.array.map(indices, function(valueIndex, arrayIndex) {
        return arrays[arrayIndex][valueIndex];
      });
      var i = indices.length - 1;
      for (; i >= 0; i--) {
        goog.asserts.assert(indices);
        if (indices[i] < arrays[i].length - 1) {
          indices[i]++;
          break;
        }
        if (i == 0) {
          indices = null;
          break;
        }
        indices[i] = 0;
      }
      return goog.iter.createEs6IteratorYield(retVal);
    }
    return goog.iter.ES6_ITERATOR_DONE;
  };
  return iter;
};
goog.iter.cycle = function(iterable) {
  var baseIterator = goog.iter.toIterator(iterable);
  var cache = [];
  var cacheIndex = 0;
  var iter = new goog.iter.Iterator();
  var useCache = false;
  iter.next = function() {
    var returnElement = null;
    if (!useCache) {
      var it = baseIterator.next();
      if (it.done) {
        if (goog.array.isEmpty(cache)) {
          return goog.iter.ES6_ITERATOR_DONE;
        }
        useCache = true;
      } else {
        cache.push(it.value);
        return it;
      }
    }
    returnElement = cache[cacheIndex];
    cacheIndex = (cacheIndex + 1) % cache.length;
    return goog.iter.createEs6IteratorYield(returnElement);
  };
  return iter;
};
goog.iter.count = function(opt_start, opt_step) {
  var counter = opt_start || 0;
  var step = opt_step !== undefined ? opt_step : 1;
  var iter = new goog.iter.Iterator();
  iter.next = function() {
    var returnValue = counter;
    counter = counter + step;
    return goog.iter.createEs6IteratorYield(returnValue);
  };
  return iter;
};
goog.iter.repeat = function(value) {
  var iter = new goog.iter.Iterator();
  iter.next = function() {
    return goog.iter.createEs6IteratorYield(value);
  };
  return iter;
};
goog.iter.accumulate = function(iterable) {
  var iterator = goog.iter.toIterator(iterable);
  var total = 0;
  var iter = new goog.iter.Iterator();
  iter.next = function() {
    var $jscomp$destructuring$var43 = iterator.next();
    var done = $jscomp$destructuring$var43.done;
    var value = $jscomp$destructuring$var43.value;
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    total = total + value;
    return goog.iter.createEs6IteratorYield(total);
  };
  return iter;
};
goog.iter.zip = function(var_args) {
  var args = arguments;
  var iter = new goog.iter.Iterator();
  if (args.length > 0) {
    var iterators = goog.array.map(args, goog.iter.toIterator);
    var allDone = false;
    iter.next = function() {
      if (allDone) {
        return goog.iter.ES6_ITERATOR_DONE;
      }
      var arr = [];
      var i = 0;
      var iterator = void 0;
      for (; iterator = iterators[i++];) {
        var it = iterator.next();
        if (it.done) {
          allDone = true;
          return goog.iter.ES6_ITERATOR_DONE;
        }
        arr.push(it.value);
      }
      return goog.iter.createEs6IteratorYield(arr);
    };
  }
  return iter;
};
goog.iter.zipLongest = function(fillValue, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  var iter = new goog.iter.Iterator();
  if (args.length > 0) {
    var iterators = goog.array.map(args, goog.iter.toIterator);
    var allDone = false;
    iter.next = function() {
      if (allDone) {
        return goog.iter.ES6_ITERATOR_DONE;
      }
      var iteratorsHaveValues = false;
      var arr = [];
      var i = 0;
      var iterator = void 0;
      for (; iterator = iterators[i++];) {
        var it = iterator.next();
        if (it.done) {
          arr.push(fillValue);
          continue;
        }
        arr.push(it.value);
        iteratorsHaveValues = true;
      }
      if (!iteratorsHaveValues) {
        allDone = true;
        return goog.iter.ES6_ITERATOR_DONE;
      }
      return goog.iter.createEs6IteratorYield(arr);
    };
  }
  return iter;
};
goog.iter.compress = function(iterable, selectors) {
  var valueIterator = goog.iter.toIterator(iterable);
  var selectorIterator = goog.iter.toIterator(selectors);
  var iter = new goog.iter.Iterator();
  var allDone = false;
  iter.next = function() {
    if (allDone) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    for (; true;) {
      var valIt = valueIterator.next();
      if (valIt.done) {
        allDone = true;
        return goog.iter.ES6_ITERATOR_DONE;
      }
      var selectorIt = selectorIterator.next();
      if (selectorIt.done) {
        allDone = true;
        return goog.iter.ES6_ITERATOR_DONE;
      }
      var val = valIt.value;
      var selectorVal = selectorIt.value;
      if (selectorVal) {
        return goog.iter.createEs6IteratorYield(val);
      }
    }
  };
  return iter;
};
goog.iter.GroupByIterator_ = function(iterable, opt_keyFunc) {
  this.iterator = goog.iter.toIterator(iterable);
  this.keyFunc = opt_keyFunc || goog.functions.identity;
  this.targetKey;
  this.currentKey;
  this.currentValue;
};
goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator);
goog.iter.GroupByIterator_.prototype.next = function() {
  for (; this.currentKey == this.targetKey;) {
    var it = this.iterator.next();
    if (it.done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    this.currentValue = it.value;
    this.currentKey = this.keyFunc(this.currentValue);
  }
  this.targetKey = this.currentKey;
  return goog.iter.createEs6IteratorYield([this.currentKey, this.groupItems_(this.targetKey)]);
};
goog.iter.GroupByIterator_.prototype.groupItems_ = function(targetKey) {
  var arr = [];
  for (; this.currentKey == targetKey;) {
    arr.push(this.currentValue);
    var it = this.iterator.next();
    if (it.done) {
      break;
    }
    this.currentValue = it.value;
    this.currentKey = this.keyFunc(this.currentValue);
  }
  return arr;
};
goog.iter.groupBy = function(iterable, opt_keyFunc) {
  return new goog.iter.GroupByIterator_(iterable, opt_keyFunc);
};
goog.iter.starMap = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  var iter = new goog.iter.Iterator();
  iter.next = function() {
    var it = iterator.next();
    if (it.done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    var args = goog.iter.toArray(it.value);
    var value = f.apply(opt_obj, [].concat(args, undefined, iterator));
    return goog.iter.createEs6IteratorYield(value);
  };
  return iter;
};
goog.iter.tee = function(iterable, opt_num) {
  function addNextIteratorValueToBuffers() {
    var $jscomp$destructuring$var44 = iterator.next();
    var done = $jscomp$destructuring$var44.done;
    var value = $jscomp$destructuring$var44.value;
    if (done) {
      return false;
    }
    var i = 0;
    var buffer = void 0;
    for (; buffer = buffers[i++];) {
      buffer.push(value);
    }
    return true;
  }
  function createIterator(buffer) {
    var iter = new goog.iter.Iterator();
    iter.next = function() {
      if (goog.array.isEmpty(buffer)) {
        var added = addNextIteratorValueToBuffers();
        if (!added) {
          return goog.iter.ES6_ITERATOR_DONE;
        }
      }
      goog.asserts.assert(!goog.array.isEmpty(buffer));
      return goog.iter.createEs6IteratorYield(buffer.shift());
    };
    return iter;
  }
  var iterator = goog.iter.toIterator(iterable);
  var num = typeof opt_num === "number" ? opt_num : 2;
  var buffers = goog.array.map(goog.array.range(num), function() {
    return [];
  });
  return goog.array.map(buffers, createIterator);
};
goog.iter.enumerate = function(iterable, opt_start) {
  return goog.iter.zip(goog.iter.count(opt_start), iterable);
};
goog.iter.limit = function(iterable, limitSize) {
  goog.asserts.assert(goog.math.isInt(limitSize) && limitSize >= 0);
  var iterator = goog.iter.toIterator(iterable);
  var iter = new goog.iter.Iterator();
  var remaining = limitSize;
  iter.next = function() {
    if (remaining-- > 0) {
      return iterator.next();
    }
    return goog.iter.ES6_ITERATOR_DONE;
  };
  return iter;
};
goog.iter.consume = function(iterable, count) {
  goog.asserts.assert(goog.math.isInt(count) && count >= 0);
  var iterator = goog.iter.toIterator(iterable);
  for (; count-- > 0;) {
    goog.iter.nextOrValue(iterator, null);
  }
  return iterator;
};
goog.iter.slice = function(iterable, start, opt_end) {
  goog.asserts.assert(goog.math.isInt(start) && start >= 0);
  var iterator = goog.iter.consume(iterable, start);
  if (typeof opt_end === "number") {
    goog.asserts.assert(goog.math.isInt(opt_end) && opt_end >= start);
    iterator = goog.iter.limit(iterator, opt_end - start);
  }
  return iterator;
};
goog.iter.hasDuplicates_ = function(arr) {
  var deduped = [];
  goog.array.removeDuplicates(arr, deduped);
  return arr.length != deduped.length;
};
goog.iter.permutations = function(iterable, opt_length) {
  var elements = goog.iter.toArray(iterable);
  var length = typeof opt_length === "number" ? opt_length : elements.length;
  var sets = goog.array.repeat(elements, length);
  var product = goog.iter.product.apply(undefined, sets);
  return goog.iter.filter(product, function(arr) {
    return !goog.iter.hasDuplicates_(arr);
  });
};
goog.iter.combinations = function(iterable, length) {
  function getIndexFromElements(index) {
    return elements[index];
  }
  var elements = goog.iter.toArray(iterable);
  var indexes = goog.iter.range(elements.length);
  var indexIterator = goog.iter.permutations(indexes, length);
  var sortedIndexIterator = goog.iter.filter(indexIterator, function(arr) {
    return goog.array.isSorted(arr);
  });
  var iter = new goog.iter.Iterator();
  iter.next = function() {
    var $jscomp$destructuring$var45 = sortedIndexIterator.next();
    var done = $jscomp$destructuring$var45.done;
    var value = $jscomp$destructuring$var45.value;
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    return goog.iter.createEs6IteratorYield(goog.array.map(value, getIndexFromElements));
  };
  return iter;
};
goog.iter.combinationsWithReplacement = function(iterable, length) {
  function getIndexFromElements(index) {
    return elements[index];
  }
  var elements = goog.iter.toArray(iterable);
  var indexes = goog.array.range(elements.length);
  var sets = goog.array.repeat(indexes, length);
  var indexIterator = goog.iter.product.apply(undefined, sets);
  var sortedIndexIterator = goog.iter.filter(indexIterator, function(arr) {
    return goog.array.isSorted(arr);
  });
  var iter = new goog.iter.Iterator();
  iter.next = function() {
    var $jscomp$destructuring$var46 = sortedIndexIterator.next();
    var done = $jscomp$destructuring$var46.done;
    var value = $jscomp$destructuring$var46.value;
    if (done) {
      return goog.iter.ES6_ITERATOR_DONE;
    }
    return goog.iter.createEs6IteratorYield(goog.array.map(value, getIndexFromElements));
  };
  return iter;
};

//# sourceMappingURL=goog.iter.iter.js.map
