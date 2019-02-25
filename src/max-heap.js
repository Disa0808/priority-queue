const Node = require('./node');

class MaxHeap {
	constructor() {
    this.parentNodes = [];
    this.root = null;
	}

	push(data, priority) {
		
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
    if (!this.root) {
      this.root = node;
      this.parentNodes.push(node);
    } else {
      this.parentNodes[0].appendChild(node);
      this.parentNodes.push(node);
      if (this.parentNodes[0].right) {
        this.parentNodes.shift();
      }
    }
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
