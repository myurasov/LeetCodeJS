// https://leetcode.com/problems/powx-n/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	const precision = 1e-10;

	if (n === 0) return 1;
	if (x === 1) return 1;
	if (x === -1) return (n % 2) ? -1 : 1;

	var nSign = n < 0 ? -1 : 1;
	var result = x;
	var dif = precision;

	n = nSign * n;

	while (--n > 0 && dif >= precision) {
		dif = result;
		result *= x;
		dif -= result;
		if (dif < 0) dif = -dif;
	}

	if (nSign === -1) result = 1 / result;

	return result;
};
