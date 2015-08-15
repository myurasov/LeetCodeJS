// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	var s = new Set();

	for (var i = 0; i < nums.length; i++) {
		if (s.has(nums[i])) return true;
		s.add(nums[i]);
	}

	return false;
};
