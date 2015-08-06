// https://leetcode.com/problems/multiply-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	return _multiply(num1, num2);
};

var _multiply = function (num1, num2) {
	var result = '';
	var i = num2.length;

	while (i --> 0) {
		var r = _multiplyBySingleDigit(num1, num2.charAt(i));

		// pad with zeroes
		for (var zeroes = 0; zeroes < num2.length - i - 1; zeroes++) {
			r = r + '0';
		}

		result = _add(result, r);
	}

	return result;
};

/**
 * Multiply string number by single digit
 */
var _multiplyBySingleDigit = function (num1, digit) {
	var result = '';
	var carry = 0;
	var i = num1.length;

	digit = parseInt(digit);

	while (i --> 0) {
		var a = parseInt(num1.charAt(i));
		var r = a * digit + carry;
		result = (r % 10).toString() + result;
		carry = (r - r % 10) / 10;
	}

	if (carry > 0) {
		result = carry.toString() + result;
	}

	return result || '0';
}

/**
 * Add two string numbers
 */
var _add = function (num1, num2) {
	var result = '';
	var carry = 0;
	var r = 0;

	for (var i = 0; i < Math.max(num1.length, num2.length); i++) {
		var a = parseInt(num1.charAt(num1.length - i - 1)) || 0;
		var b = parseInt(num2.charAt(num2.length - i - 1)) || 0;
		r = a + b + carry;
		carry = (r - r % 10) / 10;
		result = (r % 10).toString() + result;
	}

	if (carry > 0) {
		result = carry.toString() + result;
	}

	// remove leading zeroes
	result = result.replace(/^0+/g, '0');

	return result || '0';
}
