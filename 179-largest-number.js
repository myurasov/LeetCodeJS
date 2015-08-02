// https://leetcode.com/problems/largest-number/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
	nums = nums.sort(cmp);
	return nums.join('').replace(/^0+/g, '0');
};

/**
 * Custom comparator
 */
var cmp = function (a, b) {
	var ab = a * Math.pow(10, numDigits(b)) + b;
	var ba = b * Math.pow(10, numDigits(a)) + a;
	return Math.sign(ba - ab);
};

/**
 * Calculate number of decimal digits
 */
var numDigits = function (n) {
	if (n === 0) return 1;
	return Math.floor(Math.log10(Math.abs(n))) + 1;
};
