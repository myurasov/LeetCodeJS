// https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	for (var a = 0; a < haystack.length - needle.length + 1; a++) {
		if (needle === haystack.substr(a, needle.length)) {
			return a;
		}
	}

	return -1;
};
