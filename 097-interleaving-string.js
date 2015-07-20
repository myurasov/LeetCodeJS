// https://leetcode.com/problems/interleaving-string/

// storage for memorization
var h = new Map();

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
	if (s1 == '' && s2 == '' && s3 == '') return true;

	// create key for memorization
	var k = s1 + '.' + s2 + '.' + s3;

	// already computed
	if (h[k] !== undefined) return h[k];

	var m1 = matchStarts(s1, s3);
	var m2 = matchStarts(s2, s3);

	var int1 = false, int2 = false;

	if (m1) {
		int1 = isInterleave(s1.substr(m1), s2, s3.substr(m1));
	}

	if (!int1 && m2) {
		int2 = isInterleave(s1, s2.substr(m2), s3.substr(m2));
	}

	h[k] = int1 || int2;

	return h[k];
};

/**
 * Returns 1 if first letters start
 * @param s1
 * @param s2
 * @returns {number}
 */
function matchStarts(s1, s2) {
	if (s1 === '' || s2 === '') return 0;
	if (s1.charAt(0) === s2.charAt(0)) return 1;
	return 0;
}
