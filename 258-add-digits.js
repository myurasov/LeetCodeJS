/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	var res = 0;

	while (num > 0) {
		res += num % 10;
		num = (num - num % 10) / 10;
	}

	return res > 9 ? addDigits(res) : res;
};
