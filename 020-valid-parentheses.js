// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	var b = [];

	for (var i = 0; i < s.length; i++) {
		var c = s.charAt(i);

		if (c === ')') {
			if (b.pop() !== '(') return false;
		} else if (c === ']') {
			if (b.pop() !== '[') return false;
		} else if (c === '}') {
			if (b.pop() !== '{') return false;
		} else {
			b.push(c);
		}

	}

	return (b.length === 0);
};
