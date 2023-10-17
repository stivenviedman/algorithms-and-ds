const { tap } = require('node:test/reporters');
const { run } = require('node:test');
const path = require('node:path');

run({
    files: [
      path.resolve('./binary-search-tree/test.js'),
      path.resolve('./balanced-brackets/test.js'),
      path.resolve('./sorting/insertion-sort-test.js')
    ]
  })
  .compose(tap)
  .pipe(process.stdout);
