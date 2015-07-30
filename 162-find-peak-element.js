// https://leetcode.com/problems/find-peak-element/

// Binary search version

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	return _findPeakElement(nums, 0, nums.length - 1);
};

var _findPeakElement = function (nums, start, end) {
	if (end - start === 0) return start;
	if (end - start === 1) return nums[start] > nums[end] ? start : end;

	var middle = parseInt((end + start) / 2);

	if (nums[middle - 1] < nums[middle] && nums[middle + 1] < nums[middle]) {
		return middle;
	}

	if (nums[middle - 1] > nums[middle] && end > start) {
		// go left
		return _findPeakElement(nums, 0, middle - 1);
	} else if (nums[middle - 1] < nums[middle] && end > start) {
		// go right
		return _findPeakElement(nums, middle + 1, end);
	}

	return 0;
};
