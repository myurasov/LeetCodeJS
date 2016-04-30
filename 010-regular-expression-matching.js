// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} string
 * @param {string} pattern
 * @return {boolean}
 */
var isMatch = function (string, pattern) {
	pattern = _parsePattern(pattern);
	return _isMatch(string, pattern, new Map(), 0, 0);
}

var _isMatch = function (string, pattern, memory, s, p) {

	// memoize
	var key = s + ':' + p;
	if (memory.has(key)) return memory.get(key);

	while (p < pattern.length && s < string.length) {
		var P = pattern[p];
		var S = string[s];

		if (P.any) {
			if (P.char === S || P.char === '.') {
				if (_isMatch(string, pattern, memory, s, 1 + p)) return true;
				s++;
			} else {
				p++;
			}
		} else {
			if (P.char === S || P.char === '.') {
				s++;
				p++;
			} else {
				return false;
			}
		}

	}

	return s === string.length && (pattern.length === p || pattern[p].stop);
}

/**
 * @param pattern
 * @return {[{char, asterisk}]}
 */
function _parsePattern(pattern) {
	var res = [];

	for (var c = 0; c < pattern.length; c++) {
		var char = pattern[c];
		if ('*' === char) {
			res[res.length - 1].any = true;
		} else {
			res.push({char, stop: false, any: false});
		}
	}

	// detect when pattern is done

	var p = res.length - 1;
	while (p >= 0 && res[p].any)
		res[p--].stop = true;

	return res;
}
