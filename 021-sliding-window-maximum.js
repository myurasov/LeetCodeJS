// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

	var m = [];
	var w = [];

	w = nums.slice(0, k - 1);

	for (var a = k - 1; a < nums.length; a++) {
		w.push(nums[a]);
		m.push(w.reduce((a, b) => {
			return a > b ? a : b;
		}));
		w.shift();
	}

	return m;
};
