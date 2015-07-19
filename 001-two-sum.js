// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	var h = new Map();

	// create dictionary for faster lookup
	for (i = 0; i < nums.length; i++) {
		h[nums[i]] = i;
	}

	for (i = 0; i < nums.length; i++) {
		var d = target - nums[i];
		if (h[d] !== undefined && h[d] !== i) {
			return [i + 1, h[d] + 1];
		}
	}
};
