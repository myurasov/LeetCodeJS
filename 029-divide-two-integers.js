// https://leetcode.com/problems/divide-two-integers/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {

	if (divisor === 0) {
		return +Infinity;
	}

	var sign = (dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0) ? -1 : 1;

	if (dividend < 0) dividend = -dividend;
	if (divisor < 0) divisor = -divisor;

	if (divisor === 1) {
		return dividend * sign;
	}

	if (dividend === divisor) {
		return sign;
	}

	var remain = dividend;
	var part1 = divisor;
	var result = 0;
	var mask = 1;

	while (part1 < remain) {
		part1 <<= 1;
		mask <<= 1;

		if (part1 < 0 || mask < 0) {
			return NaN; // overflow
		}
	}

	do {
		if (remain >= part1) {
			remain -= part1;
			result += mask;
		}

		part1 >>= 1;
		mask >>= 1;
	} while (mask != 0);

	return result * sign;
};
