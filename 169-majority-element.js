// https://leetcode.com/problems/majority-element/

// O(N) complexity w radix sorting

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	nums = radixSort(nums);
	var middle = Math.ceil(nums.length / 2) - 1;
	return nums[middle];
};


var radixSort = function (a) {
	var buckets = [a, []];

	for (var d = 0; d < 32; d++) {
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
