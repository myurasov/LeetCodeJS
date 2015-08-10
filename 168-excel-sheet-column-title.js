// https://leetcode.com/problems/excel-sheet-column-title/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	var result = '';

	while (n > 0) {
		var d = n % 26 || 26;
		n = (n - d) / 26;
		result = String.fromCharCode(d + 64) + result;
	}

	return result;
};
