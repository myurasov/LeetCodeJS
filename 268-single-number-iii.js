// https://leetcode.com/problems/single-number-iii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {

	nums = radixSort(nums);

	var res = [];

	for (var i = 0; i < nums.length; i++) {
		if (res[res.length - 1] === nums[i]) {
			res.pop();
		} else {
			res.push(nums[i]);
		}
	}

	return res;
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
