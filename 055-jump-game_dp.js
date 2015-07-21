// https://leetcode.com/problems/jump-game/

// Dynamic Programming approach.
// Not accepted by LeetCode OJ due to too deep recursion on large inputs,
// but fast is an elegant solution.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums, start) {

	if (start === undefined) {
		start = 0;
		this.memory = new Map();
	}

	// memorization key
	var key = start;

	if (this.memory[key] !== undefined) {
		return this.memory[key];
	}

	// empty and single element arrays
	if (nums.length - start <= 1) {
		this.memory[key] = true;
		return this.memory[key];
	}

	// check all possible jumps from the first cell

	var j = nums[start];

	while (j > 0) {
		if (canJump(nums, start + j--)) {
			this.memory[key] = true;
			return this.memory[key];
		}
	}

	// didn't work out
	this.memory[key] = false;
	return this.memory[key];
};
