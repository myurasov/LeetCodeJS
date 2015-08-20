// https://leetcode.com/problems/ugly-number-ii/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
	var i = 0, j = 0, m = new Map();

	while (j < n) {
		i++;

		if (isUglyNumber(i, m)) {
			j++;
		}
	}

	return i;
};

var isUglyNumber = function (n, m) {

	if (m.has(n)) {
		return m.get(n);
	}

	if (n % 1 > 0) {
		m.set(n, false);
		return false;
	}

	if (n === 1) {
		m.set(n, true);
		return true;
	}

	if (n % 2 > 0 && n % 3 > 0 && n % 5 > 0) {
		m.set(n, false);
		return false;
	} else {
		m.set(
			n,
			isUglyNumber(n / 2, m)
			|| isUglyNumber(n / 3, m)
			|| isUglyNumber(n / 5, m)
		);
		return m.get(n);
	}
};
