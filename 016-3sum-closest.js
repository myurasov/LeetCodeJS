// https://leetcode.com/problems/3sum-closest/

// 2-pointers version

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

	if (nums.length < 3) return [];

	var sum = 0, minDistance = -1;

	nums = nums.sort(function(a, b) { return a - b; });

	for (var a = 0; a < nums.length; a++) {

		var needed = target - nums[a];
		var left = a + 1;
		var right = nums.length - 1;

		while (left < right) {

			var distance = Math.abs(target - (nums[a] + nums[left] + nums[right]));

			if (distance < minDistance || minDistance === -1) {
				sum = nums[a] + nums[left] + nums[right];
				minDistance = distance;
			}

			if (nums[left] + nums[right] < needed) {
				left++;
			} else {
				right--;
			}

		}

	}

	return sum;

};
