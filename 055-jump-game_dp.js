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

/*

Test calls

// true
canJump([2,3,1,1,4]);

// false
canJump([3,2,1,0,4]);

// true
canJump([0]);

// true
canJump([1,1,1,....,1]);

// false
canJump([2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6]);

// false
canJump([0,1]);

*/
