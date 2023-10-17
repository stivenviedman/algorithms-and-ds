const test = require('node:test');
const assert = require('node:assert').strict;

const { InsertionSort, NonIncreasingInsertionSort } = require('./insertion-sort');

test('sorts elements correctly', () => {
  const A = [5, 2, 4, 6, 1, 3]
  InsertionSort(A)
  assert.deepEqual(A, [1, 2, 3, 4, 5, 6]);
});

test('sorts elements correctly in non-increasing order', () => {
  const A = [5, 2, 4, 6, 1, 3]
  NonIncreasingInsertionSort(A)
  assert.deepEqual(A, [6, 5, 4, 3, 2, 1]);
});
