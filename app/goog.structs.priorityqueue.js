goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.structs.PriorityQueue");
  goog.module.declareLegacyNamespace();
  var Heap = goog.require("goog.structs.Heap");
  var PriorityQueue = function() {
    return Heap.apply(this, arguments) || this;
  };
  $jscomp.inherits(PriorityQueue, Heap);
  PriorityQueue.prototype.enqueue = function(priority, value) {
    this.insert(priority, value);
  };
  PriorityQueue.prototype.dequeue = function() {
    return this.remove();
  };
  exports = PriorityQueue;
  return exports;
});

//# sourceMappingURL=goog.structs.priorityqueue.js.map
