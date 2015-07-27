// https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

	if (nums.length < 4) return [];

	var r = [];

	// sort array in ascending order
	nums = nums.sort(function(a, b) { return a - b; });


	for (var a = 0; a < nums.length; a++) {

		for (var b = a + 1; b < nums.length; b++) {

			var needed = target - nums[b] - nums[a];

			var left = b + 1;
			var right = nums.length - 1;

			while (left < right) {

				if (nums[left] + nums[right] === needed) {
					r.push([nums[a], nums[b], nums[left], nums[right]]);

					// skip duplicates
					while (left < right && nums[left] === nums[left + 1]) left++;
					while (left < right && nums[right] === nums[right - 1]) right--;

					// go to next right/left
					left++;
					right--;
				} else if (nums[left] + nums[right] < needed) {
					// looking for larger pair of numbers
					left++;
				} else {
					// looking for smaller pair of numbers
					right--;
				}

			}

			// skip duplicates
			while (nums[b] === nums[b + 1]) b++;

		}

		// skip duplicates
		while (nums[a] === nums[a + 1]) a++;
	}

	return r;

};
