// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	var longestPalStart = 0;
	var longestPalLength = 0;

	for (var i = 0; i < s.length; i++) {
		for (var j = s.length - i; j >= 1; j--) {
			if (j > longestPalLength && isPalindrome(s, i, j)) {
				longestPalLength = j;
				longestPalStart = i;
			}
		}
	}

	return s.substr(longestPalStart, longestPalLength);
};

var isPalindrome = function (s, start, length) {
	var m = Math.floor(length / 2);

	while (m-- > 0) {
		if (s.charAt(m + start) !== s.charAt(length - m + start - 1)) {
			return false;
		}
	}

	return true;
};
