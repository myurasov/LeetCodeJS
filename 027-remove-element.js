// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	var a = 0;
	var b = 0;

	for (a = 0; a < nums.length; a++) {
		if (b !== a) nums[b] = nums[a];
		if (nums[a] !== val) b++;
	}

	return b;
};
