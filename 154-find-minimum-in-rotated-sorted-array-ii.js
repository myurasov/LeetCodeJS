// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

// Can contain more minor optimizations, but essentially comes to 2 cases:
// - array is sorted
// - arrays is rotated and (as it contains duplicates) only linear search is applicable

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	if (nums[0] < nums[nums.length - 1]) {
		return nums[0];
	}

	return findMinLinear(nums);
};

var findMinLinear = function (nums) {
	var i = nums.length - 1;
	var min = nums[i];

	while (i --> 0) {
		if (nums[i] < min) min = nums[i];
	}

	return min;
}
