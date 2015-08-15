// https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	var res = 0;

	while (--n > 1) {
		if (isPrime(n)) {
			res++;
		}
	}

	return res;
};

var isPrime = function (n) {
	for (var d = 2; d * d <= n; d++) {
		if (n % d === 0) return false;
	}

	return true;
}
