// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	var i = 0;
	var r = 0;
	var s = x < 0 ? -1 : 1;

	x = x * s;

	while (x > 0) {
		var d = x % 10;
		x = (x - d) / 10;
		r = r * 10 + d;
	}

	return r > Math.pow(2, 31) ? 0 : s * r;
};
