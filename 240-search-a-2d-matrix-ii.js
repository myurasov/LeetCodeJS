// https://leetcode.com/problems/search-a-2d-matrix-ii/

// O(M*log(N)) version

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	for (var r = 0; r < matrix.length; r++) {
		if (/* check that element is within current row range */
			target >= matrix[r][0] && target <= matrix[r][matrix[r].length - 1]) {
			if (_bSearch(matrix[r], 0, matrix[r].length - 1, target)) {
				return true;
			}
		}
	}

	return false;
};

var _bSearch = function (a, start, end, target) {
	if (end < start) return false;

	var middle = parseInt((start + end) / 2);

	if (a[middle] === target) {
		return true;
	} else if (a[middle] > target) {
		return _bSearch(a, 0, middle - 1, target);
	} else {
		return _bSearch(a, middle + 1, end, target);
	}
}
