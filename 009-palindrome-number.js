// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	return x >= 0 ? x === reverse(x) : false;
};

// from #006
var reverse = function (x) {
	var i = 0;
	var r = 0;
	var s = x < 0 ? -1 : 1;

	x = x * s;

	while (x > 0) {
		var d = x % 10;
		x = (x - d) / 10;
		r = r * 10 + d;
	}

	return s * r;
};
