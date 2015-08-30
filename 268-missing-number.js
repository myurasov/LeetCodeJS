// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	nums = radixSort(nums);

	for (var i = 1; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] > 1) {
			return nums[i - 1] + 1;
		}
	}

	if (nums[0] > 0) {
		// missing left
		return 0;
	} else {
		// missing right
		return nums[i - 1] + 1;
	}
};

var radixSort = function (a) {
	var buckets = [a, []];

	for (var d = 0; d < 31; d++) {

		var newBuckets = [[], []];

		for (var b = 0; b < buckets.length; b++) {

			for (var n = 0; n < buckets[b].length; n++) {
				var number = buckets[b][n];
				var digit = (number >> d) & 1;
				newBuckets[digit].push(number);
			}
		}

		buckets = newBuckets;
	}

	return buckets[0].concat(buckets[1]);
};
