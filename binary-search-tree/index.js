const { Node } = require("./node");

class BinarySearchTree {
  root = undefined;
  treeWalkResult = [];

  insert(key) {
    const newNode = new Node(key)

    if (this.root === undefined) {
      this.root = newNode
    } else {
      this._insertNode(this.root, newNode)
    }
  }

  inOrderTreeWalk() {
    this._inOrderTreeWalk(this.root);
    const resut = [...this.treeWalkResult]
    this.treeWalkResult = []
    return resut
  }

  preOrderTreeWalk() {
    this._preOrderTreeWalk(this.root);
    const resut = [...this.treeWalkResult];
    this.treeWalkResult = [];
    return resut;
  }

  postOrderTheeWalk() {
    this._postOrderTreeWalk(this.root);
    const resut = [...this.treeWalkResult];
    this.treeWalkResult = [];
    return resut;
  }

  search(key, node) {
    if (node === undefined || key === node.key) {
      return node;
    }

    if (key < node.key) {
      return this.search(key, node.left)
    } else {
      return this.search(key, node.right);
    }
  }

  min() {
    return this._min(this.root).key
  }

  max() {
    return this._max(this.root).key;
  }

  heigth() {
    const result = this._heigth(this.root);

    return result === 0 ? result : result - 1
  }

  successor(node) {
    if (node.right !== undefined) {
      return this._min(node.right);
    }

    let y = node.p;

    while (y !== undefined && y?.key === node.key) {
      x = y;
      y = y.p;
    }

    return y;
  }

  predecessor(node) {
    if (node.left !== undefined) {
      return this._max(node.left);
    }

    // root node without left branch - means there's no lesser number
    if (node.p === undefined) {
      return undefined;
    }

    // min has no predecesor
    if (this.min() === node.key) {
      return undefined
    }

    // node is the right child of its parent, the its parent is its predecessor
    if (node.p?.right?.key === node.key) {
      return node.p
    }

    return node.p.p
  }

  orderLevelTreeWalk() {
    const h = this.heigth() + 1;

    for(let i = 0; i <= h; i++) {
      this._levelTreeWalk(this.root, i);
    }

    return this.treeWalkResult;
  }

  toJson() {
    return JSON.stringify(this.root, null, 2)
  }

  _levelTreeWalk(root, level) {
    if (root === undefined) {
      return;
    }

    if (level === 1) {
      this.treeWalkResult.push(root.key);
      return
    }

    this._levelTreeWalk(root.left, level - 1);
    this._levelTreeWalk(root.right, level - 1);
  }

  _heigth(root) {
    if (!root) {
      return 0
    }

    const left = this._heigth(root ? root.left : null)
    const right =  this._heigth(root ? root.right : null)

    return Math.max(left, right) + 1
  }

  _max(root) {
    let node = root;

    while (node.right !== undefined) {
      node = node.right;
    }

    return node;
  }

  _min(root) {
    let node = root;

    while (node.left !== undefined) {
      node = node.left;
    }

    return node;
  }

  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === undefined) {
        newNode.p = node;
        node.left = newNode
      } else {
        this._insertNode(node.left, newNode)
      }
    } else {
      if (node.right === undefined) {
        newNode.p = node;
        node.right = newNode
      } else {
        this._insertNode(node.right, newNode)
      }
    }
  }

  _inOrderTreeWalk(node) {
    if (node !== undefined) {
      this._inOrderTreeWalk(node.left)
      this.treeWalkResult.push(node.key)
      this._inOrderTreeWalk(node.right)
    }
  }

  _preOrderTreeWalk(node) {
    if (node !== undefined) {
      this.treeWalkResult.push(node.key)
      this._inOrderTreeWalk(node.left)
      this._inOrderTreeWalk(node.right)
    }
  }

  _postOrderTreeWalk(node) {
    if (node !== undefined) {
      this._inOrderTreeWalk(node.left)
      this._inOrderTreeWalk(node.right)
      this.treeWalkResult.push(node.key)
    }
  }
}

exports.BinarySearchTree = BinarySearchTree;
