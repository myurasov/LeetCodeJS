// https://leetcode.com/problems/3sum/

// 2 pointers version

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

	if (nums.length < 3) return [];

	var r = [];

	// sort array in ascending order
	nums = nums.sort(function(a, b) { return a - b; });

	for (var a = 0; a < nums.length; a++) {

		var needed = 0 - nums[a];
		var left = a + 1;
		var right = nums.length - 1;

		while (left < right) {
			if (nums[left] + nums[right] === needed) {
				r.push([nums[a], nums[left], nums[right]]);

				// skip duplicates
				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;

				// go to next right/left
				left++;
				right--;
			} else if (nums[left] + nums[right] < needed) {
				left++;
			} else {
				right--;
			}
		}

		// skip duplicates
		while (nums[a] === nums[a + 1]) a++;

	}

	return r;

};
