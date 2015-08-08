// https://leetcode.com/problems/maximum-gap/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
	if (nums.length < 2) {
		return 0;
	}

	nums = radixSort(nums);

	var result = 0;

	for (var i = 1; i < nums.length; i++) {
		result = Math.max(result, Math.abs(nums[i - 1] - nums[i]));
	}

	return result;
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
