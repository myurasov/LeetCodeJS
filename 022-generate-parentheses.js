// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	return _generateParenthesis(n, 0, 0, '', []);
};

var _generateParenthesis = function (numPairs, numOpen, numClose, currentResult, result) {
	if (numOpen < numPairs) {
		_generateParenthesis(numPairs, numOpen + 1, numClose, currentResult + '(', result);
	}

	if (numClose < numPairs && (numClose !== numOpen /* <currentResult> is unbalanced */)) {
		_generateParenthesis(numPairs, numOpen, numClose + 1, currentResult + ')', result);
	}

	if (numOpen === numPairs && numClose === numPairs) {
		result.push(currentResult);
	}

	return result;
}
