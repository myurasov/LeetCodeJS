// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

	if (strs.length === 1) return strs[0];
	if (strs.length == 0) return '';

	var prefixLength = 0, c = -1;

	while (1) {

		for (var i = 0; i < strs.length; i++) {

			if (prefixLength > strs[i].length - 1 || (c > 0 && strs[i].charCodeAt(prefixLength) !== c)) {
				return strs[i].substr(0, prefixLength);
			}

			c = strs[i].charCodeAt(prefixLength);
		}

		prefixLength++;
		c = -1;
	}
};
