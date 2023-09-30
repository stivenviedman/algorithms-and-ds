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
    let node = this.root;

    while (node.left !== undefined) {
      node = node.left;
    }

    return node.key;
  }

  max() {
    let node = this.root;

    while (node.right !== undefined) {
      node = node.right;
    }

    return node.key;
  }

  toJson() {
    return JSON.stringify(this.root, null, 2)
  }

  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === undefined) {
        node.left = newNode
      } else {
        this._insertNode(node.left, newNode)
      }
    } else {
      if (node.right === undefined) {
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
