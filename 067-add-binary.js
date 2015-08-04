// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	var aDigit = '', bDigit = '';
	var carry = false;
	var current = '0';
	var result = '';

	for (var i = 0; i < a.length || i < b.length || carry; i++) {
		aDigit = i < a.length ? a.charAt(a.length - i - 1) : '0';
		bDigit = i < b.length ? b.charAt(b.length - i - 1) : '0';

		if (aDigit === '0' && bDigit === '0') {
			current = carry ? '1' : '0';
			carry = false;
		} else if (aDigit === '1' && bDigit === '1') {
			current = carry ? '1' : 0;
			carry = true;
		} else {
			current = carry ? '0' : '1';
		}

		result = current + result;
	}

	return result;
};
