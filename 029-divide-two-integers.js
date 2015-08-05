// https://leetcode.com/problems/divide-two-integers/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
	// result sign
	var sign = (dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0) ? -1 : 1;

	// make args non-negative
	dividend = dividend < 0 ? 0 - dividend : dividend;
	divisor = divisor < 0 ? 0 - divisor : divisor;

	// corner cases
	if (divisor === 0) return +Infinity;
	if (dividend === 0) return 0;
	if (divisor > dividend) return 0;

	var a = dividend;
	var b = divisor;
	var result = 1;

	// divide dividend by 2, multiply dividend by 2 simultaneously
	while ((b << 1) > 0 && (b << 1) <= dividend) {
		a >>= 1;
		b <<= 1;
		result <<= 1;
	}

	// add remainder
	result += divide(dividend - b /* remainder */, divisor);

	// adjust sign
	result = sign === -1 ? 0 - result : result;

	// for leetcode
	result = Math.min(2147483647, result);
	result = Math.max(-2147483648, result);

	return result;
}

