// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	var res = 0;

	while (n > 0) {
		res += n & 1;
		n /= 2;
	}

	return res;
};
