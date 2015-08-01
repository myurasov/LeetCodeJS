// https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	while (n > 0 && (n & 1) === 0) {
		n = n >> 1;
	}

	// power of 2 has only topmost bit equal to 1
	return n === 1;
};
