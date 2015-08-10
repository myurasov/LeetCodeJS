// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
	var i = 0;
	var result = 0;

	while (i < s.length) {
		var d = s.charCodeAt(i) - 64;
		result = result * 26 + d;
		i++;
	}

	return result;
};
