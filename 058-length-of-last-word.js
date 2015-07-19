// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	var w = 0;

	for (var i = s.length - 1; i >= 0; i--) {
		if (s.charAt(i) == ' ') {
			if (w > 0) break;
		} else {
			w++;
		}
	}

	return w;
};
