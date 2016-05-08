/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

    // 1st pass
    for (var r = 0; r < board.length; r++) {
        for (var c = 0; c < board[r].length; c++) {
            var neighbours = getNeighboursCount(board, r, c)

            if (1 === board[r][c]) {
                if (neighbours < 2) {
                    board[r][c] = 10; // 1 -> 0 === 10
                } else if (neighbours > 3) {
                    board[r][c] = 10; // 1 -> 0 === 10
                }
            } else {
                if (neighbours === 3) {
                    board[r][c] = -10; // 0 -> 1 === -10
                }
            }
        }
    }

    // 2nd pass
    for (var r = 0; r < board.length; r++) {
        for (var c = 0; c < board[r].length; c++) {
            if (10 === board[r][c]) {
                board[r][c] = 0; // 1 -> 0 === 10
            } else if (-10 === board[r][c]) {
                board[r][c] = 1; // 0 -> 1 === -10
            }
        }
    }
};

function getNeighboursCount(board, r, c) {
    var neighbours = 0;

    // a b c
    // h * d
    // g f e

    if (r > 0 && c > 0 && board[r - 1][c - 1] > 0) neighbours++; // a
    if (r > 0 && board[r - 1][c] > 0) neighbours++; // b
    if (r > 0 && c < board[r].length - 1 && board[r - 1][c + 1] > 0) neighbours++; // c

    if (c < board[r].length - 1 && board[r][c + 1] > 0) neighbours++; // d
    if (c > 0 && board[r][c - 1] > 0) neighbours++; // h

    if (r < board.length - 1 && c > 0 && board[r + 1][c - 1] > 0) neighbours++; // g
    if (r < board.length - 1 && board[r + 1][c] > 0) neighbours++; // f
    if (r < board.length - 1 && c < board[r].length - 1 && board[r + 1][c + 1] > 0) neighbours++; // e

    return neighbours;
}

var board = [
    [1, 1, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1]
];

board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
];

var r = gameOfLife(board);

console.log(board);
