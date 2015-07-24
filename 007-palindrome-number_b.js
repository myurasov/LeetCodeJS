// https://leetcode.com/problems/palindrome-number/

// O(1) memory version

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

	if (x === 0) return true;
	if (x < 0) return false;

	var digits = Math.floor(Math.log10(x)) + 1;
	var middle = Math.floor(digits / 2);
	var i = 0;

	while (i < middle) {
		var d1 = x / Math.pow(10, i) % 10;
		var d2 = x / Math.pow(10, digits - i - 1) % 10;

		d1 = Math.floor(d1);
		d2 = Math.floor(d2);

		if (d2 !== d1) return false;

		i++;
	}

	return true;

};
