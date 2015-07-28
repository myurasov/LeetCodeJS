// https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
	var a = 0;
	var r = '';
	var w = '';

	str += ' ';

	while (a < str.length) {
		var c = str.charAt(a);

		if (c === ' ') {
			if (w) {
				if (r) {
					r = w + ' ' + r;
				} else {
					r = w;
				}
				w = '';
			}
		} else {
			w += c;
		}

		a++;
	}

	return r;
};
