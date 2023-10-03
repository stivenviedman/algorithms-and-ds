const test = require('node:test');
const assert = require('node:assert').strict;

const { BinarySearchTree } = require('.');

const initializeBt = (keys = []) => {
  const bt = new BinarySearchTree();

  keys.forEach(key => {
    bt.insert(key)
  })

  return bt
}

test('initialize to null root', () => {
  const bt = initializeBt();
  assert.deepEqual(bt.root, undefined);
});

test('adds nodes correctly', () => {
  const bt = initializeBt([1,2,3,4,-1]);

  assert.equal(bt.root.key, 1);
  assert.equal(bt.root.left.key, -1);
  assert.equal(bt.root.right.key, 2);
  assert.equal(bt.root.right.right.key, 3);
  assert.equal(bt.root.right.right.right.key, 4);
});

test('inorder tree walk', () => {
  const bt = initializeBt([1,2,3,4,-1]);

  assert.deepEqual(bt.inOrderTreeWalk(), [-1,1,2,3,4]);
});

test('preorder tree walk', () => {
  const bt = initializeBt([1,2,3,4,-1]);

  assert.deepEqual(bt.preOrderTreeWalk(), [1,-1,2,3,4]);
});

test('postorder tree walk', () => {
  const bt = initializeBt([1,2,3,4,-1]);

  assert.deepEqual(bt.postOrderTheeWalk(), [-1,2,3,4,1]);
});

test('search', () => {
  const bt = initializeBt([1,2,3,4,-1]);

  assert.deepEqual(
    bt.search(3, bt.root).key,
    3
  );

  assert.deepEqual(
    bt.search(10, bt.root),
    undefined
  );
});

test('min', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);

  assert.strictEqual(bt.min(), -8);
});

test('max', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);

  assert.strictEqual(bt.max(), 10);
});

test('successor of 1 is 2', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);

  assert.strictEqual(bt.root.key, 1);
  assert.strictEqual(bt.successor(bt.root).key, 2);
});

test('successor of 2 is 3', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);

  assert.strictEqual(bt.root.right.key, 2);
  assert.strictEqual(bt.successor(bt.root.right).key, 3);
});

test('successor of 4 is 10', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);

  assert.strictEqual(bt.root.right.right.right.left.key, 4);
  assert.strictEqual(bt.successor(bt.root.right.right.right.left).key, 10);
});

test('predecessor of 1 is -1', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);

  assert.strictEqual(bt.root.key, 1);
  assert.strictEqual(bt.predecessor(bt.root).key, -1);
});

test('predecessor of -2 is -8', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);

  assert.strictEqual(bt.root.left.key, -2);
  assert.strictEqual(bt.predecessor(bt.root.left).key, -8);
});

test('predecessor of 15 is undefined - root without left branch', () => {
  const bt = initializeBt([15,20,25]);

  assert.strictEqual(bt.root.key, 15);
  assert.strictEqual(bt.predecessor(bt.root), undefined);
});

test('predecessor of 8 is undefined - min', () => {
  const bt = initializeBt([15,20,25,8]);

  assert.strictEqual(bt.root.left.key, 8);
  assert.strictEqual(bt.predecessor(bt.root.left), undefined);
});

test('predecessor of 4 is 3', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);
  const node = bt.root.right.right.right.left;

  assert.strictEqual(node.key, 4);
  assert.strictEqual(bt.predecessor(node).key, 3);
});

test('height is 4', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);

  assert.strictEqual(bt.heigth(), 4);
});

test('height is 5', () => {
  const bt = initializeBt([1,2,3,4,5,6,-1]);

  assert.strictEqual(bt.heigth(), 5);
});

test('level order', () => {
  const bt = initializeBt([1,2,3,-2,10,4,-8,-1]);

  assert.deepEqual(bt.orderLevelTreeWalk(), [1,-2,2,-8,-1,3,10,4]);
});
