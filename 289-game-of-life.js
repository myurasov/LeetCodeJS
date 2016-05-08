// https://leetcode.com/problems/game-of-life/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

    // clone board
    var b = JSON.parse(JSON.stringify(board));

    for (var r = 0; r < board.length; r++) {
        for (var c = 0; c < board[r].length; c++) {
            var neighbours = getNeighboursCount(b, r, c)

            if (1 === b[r][c]) {
                if (neighbours < 2) {
                    board[r][c] = 0;
                } else if (neighbours > 3) {
                    board[r][c] = 0;
                }
            } else {
                if (neighbours === 3) {
                    board[r][c] = 1;
                }
            }
        }
    }
};

function getNeighboursCount(board, r, c) {
    var neighbours = 0;

    // a b c
    // h * d
    // g f e

    if (r > 0 && c > 0 && board[r - 1][c - 1] === 1) neighbours++; // a
    if (r > 0 && board[r - 1][c] === 1) neighbours++; // b
    if (r > 0 && c < board[r].length - 1 && board[r - 1][c + 1] === 1) neighbours++; // c

    if (c < board[r].length - 1 && board[r][c + 1] === 1) neighbours++; // d
    if (c > 0 && board[r][c - 1] === 1) neighbours++; // h

    if (r < board.length - 1 && c > 0 && board[r + 1][c - 1] === 1) neighbours++; // g
    if (r < board.length - 1 && board[r + 1][c] === 1) neighbours++; // f
    if (r < board.length - 1 && c < board[r].length - 1 && board[r + 1][c + 1] === 1) neighbours++; // e

    return neighbours;
}
