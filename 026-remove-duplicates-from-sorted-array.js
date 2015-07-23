// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	var i = 0, u = 0;

	while (i < nums.length) {

		if (i !== u) {
			// equal to: nums[u] = nums[i];
			nums.splice(u, 1, nums[i]);
		}

		while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
			i++;
		}

		u++;
		i++;
	}

	return u;
};
