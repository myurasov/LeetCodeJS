// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	var sn = normalize(s);
	var st = normalize(t);

	for (var i = 0; i < sn.length; i++) {
		if (sn[i] !== st[i]) return false;
	}

	return true;
};

var normalize = function (s) {
	var res = [];
	var chars = new Map();
	var j = 0;

	for (var i = 0; i < s.length; i++) {
		var c = s.charAt(i);

		if (!chars.has(c)) {
			chars.set(c, j);
			j++;
		}

		res.push(chars.get(c));
	}

	return res;
};
