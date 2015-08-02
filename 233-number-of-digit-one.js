// https://leetcode.com/problems/number-of-digit-one/

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
	if (n < 1) return 0;

	var digits = numDigits(n);
	var res = 0;

	while (digits > 0) {
		res += onesAtPosition(n, digits--);
	}

	return res;
};

var onesAtPosition = function (n, p) {
	var tenToP = Math.pow(10, p);
	var tenToPMinus1 = tenToP / 10;

	n = Math.abs(n);

	var res = iDiv(n, tenToP) * tenToPMinus1;
	var rem = n - res * 10;

	if (rem < tenToPMinus1) {
		res += 0;
	} else if (rem >= tenToPMinus1 && rem < tenToPMinus1 * 2) {
		res += (rem - tenToPMinus1 + 1);
	} else if (rem >= tenToPMinus1 * 2) {
		res += tenToPMinus1;
	}

	return res;
}

var numDigits = function (n) {
	if (n === 0) return 1;
	return Math.floor(Math.log10(Math.abs(n))) + 1
}

var iDiv = function (a, b) {
	return Math.floor(a / b);
}
