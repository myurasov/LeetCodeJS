// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	var s = [];
	var o1 = 0, o2 = 0;

	for (var i = 0; i < tokens.length; i++) {
		var t = tokens[i];

		if (t == '+') {
			s.push(s.pop() + s.pop())
		} else if (t == '-') {
			o1 = s.pop();
			o2 = s.pop();
			s.push(o2 - o1);
		} else if (t == '/') {
			o1 = s.pop();
			o2 = s.pop();
			s.push(parseInt(o2 / o1));
		} else if (t == '*') {
			o1 = s.pop();
			o2 = s.pop();
			s.push(o2 * o1);
		} else {
			s.push(parseInt(t));
		}
	}

	return s.pop();
};
