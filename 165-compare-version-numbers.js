// https://leetcode.com/problems/compare-version-numbers/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
	version1 = version1.split('.');
	version2 = version2.split('.');

	for (var i = 0; i < Math.max(version1.length, version2.length); i++) {
		var v1 = i < version1.length ? parseInt(version1[i]) : 0;
		var v2 = i < version2.length ? parseInt(version2[i]) : 0;
		if (v1 !== v2) return v1 > v2 ? 1 : -1;
	}

	return 0;
};
