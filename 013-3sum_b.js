// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	var h = new Map();
	var u = new Set();
	var r = [];

	// convert initial array into dictionary holding positions
	for (var a = 0; a < nums.length; a++) {
		if (h[nums[a]] === undefined) {
			h[nums[a]] = [a];
		} else {
			h[nums[a]].push(a);
		}
	}

	for (a = 0; a < nums.length; a++) {
		for (var b = a + 1; b < nums.length; b++) {

			// required number #3
			var d = 0 - (nums[a] + nums[b]);

			if (h[d] !== undefined) {
				for (var c = 0; c < h[d].length; c++) {

					// position of the number #3 should not be the same as #1 or #2
					if (h[d][c] !== a && h[d][c] !== b) {
						var ts = [nums[a], nums[b], nums[h[d][c]]].sort();
						var tj = ts.join();

						// check if this triplet is unique
						if (!u.has(tj)) {
							u.add(tj);
							r.push(ts);
						}
					}

				}
			}

		}
	}

	return r;
};

