// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	var p = [];

	for (var i = 0; i < s.length; i++) {
		var c = s.charAt(i);

		if (c === ')') {
			if (p.pop() !== '(') return false;
		} else if (c === ']') {
			if (p.pop() !== '[') return false;
		} else if (c === '}') {
			if (p.pop() !== '{') return false;
		} else {
			p.push(c);
		}

	}

	return (p.length === 0);
};
