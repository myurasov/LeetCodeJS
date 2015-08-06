// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	var r = 0;
	var carry = 0;
	var i = digits.length;

	digits[digits.length - 1]++;

	while (i --> 0) {
		r = digits[i] + carry;
		digits[i] = r % 10;
		carry = (r - r % 10) / 10;
	}

	if (carry) {
		digits.unshift(carry);
	}

	return digits;
};
