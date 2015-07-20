// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, seen) {
	if (seen === undefined) seen = new Set();

	var sum = 0;

	while (n > 0) {
		var digit = n % 10;
		sum += digit * digit;
		n = (n - digit) / 10;
	}

	if (sum === 1) {
		return true;
	} else if (seen.has(sum)) {
		return false;
	} else {
		seen.add(sum);
		return isHappy(sum, seen);
	}
};
