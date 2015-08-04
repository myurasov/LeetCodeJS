// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, result, memory) {
	if (result === undefined) result = 0;
	if (memory === undefined) memory = new Map();

	if (memory[n] !== undefined) return memory[n];
	if (n === 0) return result + 1;

	if (n > 0) {
		result = climbStairs(n - 1, result, memory) + climbStairs(n - 2, result, memory);
	}

	return (memory[n] = result);
};
