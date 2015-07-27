// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits, prefix, result) {

	if (digits.length === 0) return [];
	if (prefix === undefined) prefix = [];
	if (result === undefined) result = [];

	var keys = {
		0: [''],
		1: [''],
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z']
	}

	var letters = keys[digits.charCodeAt(0) - 48];

	digits = digits.substr(1);

	for (var i = 0; i < letters.length; i++) {
		letterCombinations(digits, prefix + letters[i], result);

		if (digits.length === 0) {
			var r = prefix + letters[i];
			if (r !== '') result.push(r);
		}

	}

	return result;
};
