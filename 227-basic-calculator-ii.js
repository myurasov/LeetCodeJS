// https://leetcode.com/problems/basic-calculator-ii/

// Backtracking version

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {

	var i = 0;
	var a = 0;
	var b = 0;
	var c = '';
	var left = '';
	var right = '';
	var op1 = '';
	var op2 = '';
	var res = '';

	// perform * and /
	while (i < s.length) {
		c = s.charAt(i);

		if (c === '*' || c === '/') {
			a = i; while (isNumeric(s.charAt(--a)));
			b = i; while (isNumeric(s.charAt(++b)));
			left = s.substr(0, a + 1);
			right = s.substr(b);
			op1 = s.substr(a + 1, i - a - 1);
			op2 = s.substr(i + 1, b - i - 1);
			res = executeOperator(op1, op2, c).toString();
			s = left + res + right;
			i = left.length + res.length - 1;
		}

		i++;
	}

	// perform + and -

	i = 0;

	while (i < s.length) {
		c = s.charAt(i);

		if (c === '+' || c === '-') {
			a = i; while (isNumeric(s.charAt(--a)));
			b = i; while (isNumeric(s.charAt(++b)));
			left = s.substr(0, a + 1);
			right = s.substr(b);
			op1 = s.substr(a + 1, i - a - 1);
			op2 = s.substr(i + 1, b - i - 1);
			res = executeOperator(op1, op2, c);
			s = left + res + right;
			i = left.length + res.length - 1;
		}

		i++;
	}

	return parseInt(s.replace('~', '-'));
};

var isNumeric = function (c) {
	var code = c.charCodeAt(0);
	var result = (code >= 48 && code <= 57) || c === ' ' || c === '~';
	return result;
}

var executeOperator = function (o1, o2, operator) {
	var res = '';

	o1 = o1.replace('~', '-');
	o2 = o2.replace('~', '-');

	if (operator === '*') {
		res = parseInt(o1) * parseInt(o2);
	} else if (operator === '/') {
		res = Math.floor(parseInt(o1) / parseInt(o2));
	} else if (operator === '+') {
		res = parseInt(o1) + parseInt(o2);
	} else if (operator === '-') {
		res = parseInt(o1) - parseInt(o2);
	} else {
		res = 0;
	}

	if (res < 0) return '~' + Math.abs(res);
	else return res.toString();
}
