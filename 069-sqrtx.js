// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	var result = sqrtGoldschmidts(x, 0.001);
	var rRound = Math.round(result);

	// for LeetCode
	if (rRound * rRound > x) {
		return Math.floor(result);
	} else {
		return rRound;
	}
};

var sqrtGoldschmidts = function (S, precision, iterations) {
	if (S === 0) {
		return 0;
	} else if (S < 0) {
		return NaN;
	}

	if (precision === undefined) precision = 1E-7;
	if (iterations === undefined) iterations = 1000;

	// if S < 3 we need to scale it up
	var scale = S > 3 ? 1 : 3;
	S *= scale * scale;

	var approxSqrt = S / 2;
	var y = 1 / approxSqrt;
	var x = S * y;
	var h = y / 2;
	var r = 1;

	while (iterations-- > 0 && r > precision) {
		r = .5 - x * h;
		x = x + x * r;
		h = h + h * r;
	}

	return x / scale;
};
