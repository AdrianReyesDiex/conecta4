// Run: node test.js
const assert = require('node:assert');
const { canDrop, winLine } = require('./game.js');

const b = (...cols) => [...cols, ...Array(7 - cols.length).fill([])].map(c => [...c]);

assert.strictEqual(winLine(b([1, 1, 1, 1]), 0, 3).length, 4, 'vertical');
assert.strictEqual(winLine(b([1], [1], [1], [1]), 1, 0).length, 4, 'horizontal, last piece in the middle');
assert.strictEqual(winLine(b([1], [2, 1], [2, 2, 1], [2, 2, 2, 1]), 3, 3).length, 4, 'diagonal /');
assert.strictEqual(winLine(b([2, 2, 2, 1], [2, 2, 1], [2, 1], [1]), 3, 0).length, 4, 'diagonal \\');
assert.strictEqual(winLine(b([1], [1], [1], [2]), 2, 0), null, 'three is not a win');
assert.strictEqual(winLine(b([1, 1, 1]), 0, 2), null, 'edge of board');

assert.ok(canDrop(b(), 0) && canDrop(b(), 6), 'empty columns');
assert.ok(!canDrop(b([1, 2, 1, 2, 1, 2]), 0), 'full column');
for (const bad of [-1, 7, 1.5, '3', null, undefined, {}]) assert.ok(!canDrop(b(), bad), `rejects ${bad}`);
console.log('ok');
