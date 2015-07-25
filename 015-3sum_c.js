// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	var h = new Map();
	var u = new Set();
	var r = [];

	// convert initial array into dictionary holding number of occurences
	for (var a = 0; a < nums.length; a++) {
		if (h[nums[a]] === undefined) {
			h[nums[a]] = 1;
		} else {
			h[nums[a]]++;
		}
	}

	for (a = 0; a < nums.length; a++) {

		// mark number #1 as used
		h[nums[a]]--;

		for (var b = a + 1; b < nums.length; b++) {

			// mark number #2 as used
			h[nums[b]]--;

			// required number #3
			var d = 0 - (nums[a] + nums[b]);

			if (h[d] >= 1 && h[nums[a]] >= 0 && h[nums[b]] >= 0) {
				var ts = [nums[a], nums[b], d].sort();
				var tj = ts.join();

				if (!u.has(tj)) {
					r.push(ts);
					u.add(tj);
				}
			}

			// un-mark number #2 as used
			h[nums[b]]++;

		}

		// un-mark number #1 as used
		h[nums[a]]++;
	}

	return r;
};
