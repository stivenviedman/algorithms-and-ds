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
