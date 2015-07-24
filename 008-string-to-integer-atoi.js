// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
	var number = 0;
	var sign = 1;
	var plusOrMinus = false;

	for (var i = 0; i < str.length; i++) {
		var charCode = str.charCodeAt(i);

		if (charCode >= 48 && charCode <= 58) {
			var digit = charCode - 48;
			number = number * 10 + digit;
		} else if (charCode === 45 /* - */ && !plusOrMinus) {
			sign *= -1;
			plusOrMinus = true
		} else if (charCode === 43 /* + */ && !plusOrMinus) {
			plusOrMinus = true;
		} else if (charCode === 32 /* <space> */ && number === 0 && !plusOrMinus) {
			continue;
		} else {
			break;
		}
	}

	return Math.min(Math.max(number * sign, -2147483648), 2147483647);
};
