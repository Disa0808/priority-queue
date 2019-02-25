class Node {
	constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.right = null;
    this.left = null;
	}

	appendChild(node) {
    if (!this.left) {
      this.left = node;
      this.left.parent = this;
    } else if (!this.right) {
      this.right = node;
      this.right.parent = this;
    }
    return this;
	}

	removeChild(node) {
    if (this.left === node) {
      this.left.parent = null;
      this.left = null;
    } else if (this.right === node) {
      this.right.parent = null;
      this.right = null;
    } else {
      throw new Error('Passed node is not a child of this node');
    }

    return this;
	}

	remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
	}

	swapWithParent() {
    if (this.parent) {
      if (this.left) {
        this.left.parent = this.parent;
      }
      if (this.right) {
        this.right.parent = this.parent;
      }
      
      if (this.parent.left === this) {
        if (this.parent.right) {
          this.parent.right.parent = this;
        }
        [ this.left, this.parent.left ] = [ this.parent, this.left ];
        [ this.right, this.parent.right ] = [ this.parent.right, this.right ];        
      } else {
        if (this.parent.left) {
          this.parent.left.parent = this;
        }
        [ this.left, this.parent.left ] = [ this.parent.left, this.left ];
        [ this.right, this.parent.right ] = [ this.parent, this.right ];
      }

      if (this.parent.parent) {
        if (this.parent === this.parent.parent.left) {
          this.parent.parent.left = this;
        } else {
          this.parent.parent.right = this;
        }
      }

      [ this.parent.parent, this.parent ] = [ this, this.parent.parent ];
    }
    return this;
	}
}

module.exports = Node;
