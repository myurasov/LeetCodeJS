// https://leetcode.com/problems/summary-ranges/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	var result = [];

	for (var i = 0; i < nums.length; i++) {
		var a = nums[i];

		while (nums[i] + 1 === nums[i + 1]) {
			i++;
		}

		var b = nums[i];

		if (b > a) {
			result.push(a + '->' + b);
		} else {
			result.push(a.toString());
		}
	}

	return result;
};
