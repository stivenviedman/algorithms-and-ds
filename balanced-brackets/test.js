const test = require('node:test');
const assert = require('node:assert').strict;

const { isBalanced } = require('.');

test('brackets are balances', () => {
  assert.equal(isBalanced('{[()]}'), true);
});

test('brackets are not balances', () => {
  assert.equal(isBalanced('{[(])}'), false);
});

test('brackets are balances', () => {
  assert.equal(isBalanced('{{[[(())]]}}'), true);
});

test('brackets are balances', () => {
  assert.equal(isBalanced('{{([])}}'), true);
});

test('brackets are not balances', () => {
  assert.equal(isBalanced('{{)[](}}'), false);
});

test('brackets are balances', () => {
  assert.equal(isBalanced('{(([])[])[]}'), true);
});

test('brackets are not balances', () => {
  assert.equal(isBalanced('{(([])[])[]]}'), false);
});

test('brackets are balances', () => {
  assert.equal(isBalanced('{(([])[])[]}[]'), true);
});
