// https://leetcode.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	var n = '';
	var r = [];

	for (var i = 0; i <= path.length; i++) {
		var c = path.charAt(i);

		if (c === '/' || !c) {
			if (n === '..') {
				r.pop();
			} else if (n !== '' && n !== '.') {
				r.push(n);
			}

			n = '';
		} else {
			n += c;
		}
	}

	return '/' + r.join('/');
};
