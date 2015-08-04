// https://leetcode.com/problems/compare-version-numbers/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
	version1 = version1.split('.');
	version2 = version2.split('.');

	for (var i = 0; i < Math.min(version1.length, version2.length); i++) {
		var c = parseInt(version1[i]) - parseInt(version2[i]);
		if (c !== 0) return Math.sign(c);
	}

	return 0;
};
