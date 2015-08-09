// https://leetcode.com/problems/majority-element/

// O(N) runtime w Moore voting algorithm

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	var c = 0;
	var m = 0;

	for (var i = 0; i < nums.length; i++) {
		if (c === 0) {
			m = nums[i];
			c = 1;
		} else if (m === nums[i]) {
			c++;
		} else {
			c--;
		}
	}

	return m;
};

