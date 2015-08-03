// https://leetcode.com/problems/sqrtx/

// Newton's method

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	var result = sqrtNewtons(x, 0.01);
	var rRound = Math.round(result);

	// for LeetCode
	if (rRound * rRound > x) {
		return Math.floor(result);
	} else {
		return rRound;
	}
};

var estimateSqrt = function (S) {
	var e = 1;

	while (S > 100) {
		S /= 100;
		e *= 10;
	}

	if (S >= 10) {
		return 6 * e;
	} else {
		return 2 * e;
	}
};

var sqrtNewtons = function (S, precision, iterations) {

	if (S === 0) {
		return 0;
	} else if (S < 0) {
		return NaN;
	}

	if (precision === undefined) precision = 1E-7;
	if (iterations === undefined) iterations = 1000;

	var x = estimateSqrt(S);
	var dif = precision;

	while (iterations-- > 0 && dif >= precision) {
		x = x - (x * x - S) / (2 * x);
		dif = S / x - x;
		if (dif < 0) dif = -dif;
	}

	return x;
};
