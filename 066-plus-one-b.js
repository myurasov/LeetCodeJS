/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	var i = digits.length;
	var carry = true; // start with carry flag set, to add 1

	while (i --> 0) {
		if (carry) digits[i]++;
		carry = digits[i] > 9;
		digits[i] = digits[i] % 10;
	}

	if (carry) digits.unshift(1);
	return digits;
};
