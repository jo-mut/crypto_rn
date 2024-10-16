goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.structs.Heap");
  goog.module.declareLegacyNamespace();
  var Node = goog.require("goog.structs.Node");
  var object = goog.require("goog.object");
  var Heap = function(opt_heap) {
    this.nodes_ = [];
    if (opt_heap) {
      this.insertAll(opt_heap);
    }
  };
  Heap.prototype.insert = function(key, value) {
    var node = new Node(key, value);
    var nodes = this.nodes_;
    nodes.push(node);
    this.moveUp_(nodes.length - 1);
  };
  Heap.prototype.insertAll = function(heap) {
    var keys;
    var values;
    if (heap instanceof Heap) {
      keys = heap.getKeys();
      values = heap.getValues();
      if (this.getCount() <= 0) {
        var nodes = this.nodes_;
        var i = 0;
        for (; i < keys.length; i++) {
          nodes.push(new Node(keys[i], values[i]));
        }
        return;
      }
    } else {
      keys = object.getKeys(heap);
      values = object.getValues(heap);
    }
    var i$jscomp$0 = 0;
    for (; i$jscomp$0 < keys.length; i$jscomp$0++) {
      this.insert(keys[i$jscomp$0], values[i$jscomp$0]);
    }
  };
  Heap.prototype.remove = function() {
    var nodes = this.nodes_;
    var count = nodes.length;
    var rootNode = nodes[0];
    if (count <= 0) {
      return undefined;
    } else if (count == 1) {
      nodes.length = 0;
    } else {
      nodes[0] = nodes.pop();
      this.moveDown_(0);
    }
    return rootNode.getValue();
  };
  Heap.prototype.peek = function() {
    var nodes = this.nodes_;
    if (nodes.length == 0) {
      return undefined;
    }
    return nodes[0].getValue();
  };
  Heap.prototype.peekKey = function() {
    return this.nodes_[0] && this.nodes_[0].getKey();
  };
  Heap.prototype.moveDown_ = function(index) {
    var nodes = this.nodes_;
    var count = nodes.length;
    var node = nodes[index];
    for (; index < count >> 1;) {
      var leftChildIndex = this.getLeftChildIndex_(index);
      var rightChildIndex = this.getRightChildIndex_(index);
      var smallerChildIndex = rightChildIndex < count && nodes[rightChildIndex].getKey() < nodes[leftChildIndex].getKey() ? rightChildIndex : leftChildIndex;
      if (nodes[smallerChildIndex].getKey() > node.getKey()) {
        break;
      }
      nodes[index] = nodes[smallerChildIndex];
      index = smallerChildIndex;
    }
    nodes[index] = node;
  };
  Heap.prototype.moveUp_ = function(index) {
    var nodes = this.nodes_;
    var node = nodes[index];
    for (; index > 0;) {
      var parentIndex = this.getParentIndex_(index);
      if (nodes[parentIndex].getKey() > node.getKey()) {
        nodes[index] = nodes[parentIndex];
        index = parentIndex;
      } else {
        break;
      }
    }
    nodes[index] = node;
  };
  Heap.prototype.getLeftChildIndex_ = function(index) {
    return index * 2 + 1;
  };
  Heap.prototype.getRightChildIndex_ = function(index) {
    return index * 2 + 2;
  };
  Heap.prototype.getParentIndex_ = function(index) {
    return index - 1 >> 1;
  };
  Heap.prototype.getValues = function() {
    var nodes = this.nodes_;
    var rv = [];
    var l = nodes.length;
    var i = 0;
    for (; i < l; i++) {
      rv.push(nodes[i].getValue());
    }
    return rv;
  };
  Heap.prototype.getKeys = function() {
    var nodes = this.nodes_;
    var rv = [];
    var l = nodes.length;
    var i = 0;
    for (; i < l; i++) {
      rv.push(nodes[i].getKey());
    }
    return rv;
  };
  Heap.prototype.containsValue = function(val) {
    return this.nodes_.some(function(node) {
      return node.getValue() == val;
    });
  };
  Heap.prototype.containsKey = function(key) {
    return this.nodes_.some(function(node) {
      return node.getKey() == key;
    });
  };
  Heap.prototype.clone = function() {
    return new Heap(this);
  };
  Heap.prototype.getCount = function() {
    return this.nodes_.length;
  };
  Heap.prototype.isEmpty = function() {
    return this.nodes_.length === 0;
  };
  Heap.prototype.clear = function() {
    this.nodes_.length = 0;
  };
  exports = Heap;
  return exports;
});

//# sourceMappingURL=goog.structs.heap.js.map
