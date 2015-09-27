// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	var single = 0;

	for (var i = 0; i < nums.length; i++) {
		single = single ^ nums[i];
	}

	return single;
};
