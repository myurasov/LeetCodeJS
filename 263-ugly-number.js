// https://leetcode.com/problems/ugly-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
	if (n < 1) {
		return false;
	}

	if (n === 1) {
		return true;
	}

	if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0) {
		return false;
	} else {
		return isUgly(n / 2) || isUgly(n / 3) || isUgly(n / 5);
	}
};
