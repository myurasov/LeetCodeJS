// https://leetcode.com/problems/factorial-trailing-zeroes/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
	var result = 0;

	while (n >= 5) {
		result += Math.floor(n / 5);
		n = n / 5;
	}

	return result;
};
