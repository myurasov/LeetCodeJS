// https://leetcode.com/problems/count-primes/

// Sieve of Eratosthenes version

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	var nums = [];
	var i = 2;
	var res = 0;
	var j = 0;

	nums.length = n;

	while (i < n) {
		if (!nums[i]) {
			res++;

			// cross-out all factors of i

			j = i * i;

			while (j < n) {
				nums[j] = 1;
				j += i;
			}
		}

		i++;
	}

	return res;
};
