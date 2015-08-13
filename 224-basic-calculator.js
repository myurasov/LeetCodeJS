// https://leetcode.com/problems/basic-calculator/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s, hasParenthesis) {

	if (hasParenthesis === false) {
		return calculateWithoutParenthesis(s);
	}

	var i = 0;

	while (i < s.length) {
		var c = s.charAt(i);

		if (c === '(') {
			var p = findMatchingParenthesis(s, i);
			var subExpr = s.substr(i + 1, p.position - i - 1);
			var subRes = calculate(subExpr, p.hasParenthesis).toString();
			var left = s.substr(0, i);
			var right = s.substr(p.position + 1);
			s = left + subRes + right;
			i += subRes.length - 1;
		}

		i++;
	}

	return calculateWithoutParenthesis(s);
};


var findMatchingParenthesis = function (s, start) {
	var i = start + 1;
	var l = 1;
	var hasParenthesis = false;

	while (i < s.length) {
		var c = s.charAt(i);

		if (c === '(') {
			l++;
			hasParenthesis = true;
		} else if (c === ')') {
			l--;
			if (l === 0) break;
		}

		i++;
	}

	return {
		position: i,
		hasParenthesis: hasParenthesis
	};
}

var calculateWithoutParenthesis = function (s) {
	var i = 0;
	var operands = ['0'];
	var operator = '+';
	var operand = '';

	while (i < s.length + 1) {
		var c = s.charAt(i);

		if (c === '+' || c === '-' || c === '') {

			if (operand !== '') {

				operands.push(operand);

				if (operands.length === 2) {
					if (operator === '-') {
						operands = [parseInt(operands[0]) - parseInt(operands[1])];
					} else if (operator === '+') {
						operands = [parseInt(operands[0]) + parseInt(operands[1])];
					}
				}

				operand = '';
			} else {
				if (operator === '-') {
					// reverse operator if previous one was '-'
					c = c === '+' ? '-' : '+';
				}
			}

			operator = c;
		} else if (c !== ' ') {
			operand += c;
		}

		i++;
	}

	return operands[0];
}
