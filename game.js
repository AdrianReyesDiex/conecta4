const COLS = 7, ROWS = 6;

// Also validates moves received from the other player, so c may be anything.
const canDrop = (board, c) => Number.isInteger(c) && c >= 0 && c < COLS && board[c].length < ROWS;

// board[c] is column c, bottom to top. Returns the winning cells through (c, r) as [c, r] pairs, or null.
function winLine(board, c, r) {
  const p = board[c][r];
  for (const [dc, dr] of [[1, 0], [0, 1], [1, 1], [1, -1]]) {
    const line = [[c, r]];
    for (const s of [1, -1]) {
      for (let x = c + dc * s, y = r + dr * s; board[x]?.[y] === p; x += dc * s, y += dr * s) line.push([x, y]);
    }
    if (line.length >= 4) return line;
  }
  return null;
}

if (typeof module === 'object') module.exports = { COLS, ROWS, canDrop, winLine };
