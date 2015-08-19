// https://leetcode.com/problems/basic-calculator-ii/

// 2-pass version

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
	var i = 0;
	var operands = ['0'];
	var operator = '+';
	var operand = '';

	while (i < s.length + 1) {
		var c = s.charAt(i);

		if (c === '+' || c === '-' || c === '') {

			if (operand !== '') {

				operand = calculateMulDiv(operand);
				operands.push(operand);

				if (operands.length === 2) {
					operands = [calculateOperation(operands, operator)];
				}

				operand = '';
			} else {
				// reverse operator if previous one was '-'
				if (operator === '-') {
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

var calculateMulDiv = function (s) {
	var i = 0;
	var operands = ['1'];
	var operator = '*';
	var operand = '';

	while (i < s.length + 1) {
		var c = s.charAt(i);

		if (c === '*' || c === '/' || c === '') {

			if (operand !== '') {

				operands.push(operand);

				if (operands.length === 2) {
					operands = [calculateOperation(operands, operator)];
				}

				operand = '';
			}

			operator = c;
		} else if (c !== ' ') {
			operand += c;
		}

		i++;
	}

	return operands[0];
};

var calculateOperation = function (operands, operator) {
	var res, a, b;

	a = parseFloat(operands[0]);
	b = parseFloat(operands[1]);

	if (operator === '-') {
		res = a - b;
	} else if (operator === '+') {
		res = a + b;
	} else if (operator === '*') {
		res = a * b;
	} else if (operator === '/') {
		res = a / b;
	}

	return Math.floor(res);
}
