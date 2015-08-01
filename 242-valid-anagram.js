// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	return s.length === t.length && s.split('').sort().join('') === t.split('').sort().join('');
};
