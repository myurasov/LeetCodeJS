// https://leetcode.com/problems/search-a-2d-matrix-ii/

// // O(M+N) version

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	var col = matrix[0].length - 1;
	var row = 0;

	while (col >= 0 && row <= matrix.length - 1) {
		if (matrix[row][col] === target) {
			return true;
		} else if (matrix[row][col] > target) {
			col--;
		} else if (matrix[row][col] < target) {
			row++;
		}

	}

	return false;
}
