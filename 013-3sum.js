// https://leetcode.com/problems/3sum/

// O(C(3,N)) version

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	var tripletsUnique = new Set();
	var triplets = [];

	for (var a = 0; a < nums.length; a++) {
		for (var b = a + 1; b < nums.length; b++) {
			for (var c = b + 1; c < nums.length; c++) {
				if (0 === nums[a] + nums[b] + nums[c]) {
					var tripletSorted = [nums[a], nums[b], nums[c]].sort();
					var tripletJoined = tripletSorted.join();
					if (!tripletsUnique.has(tripletJoined)) {
						tripletsUnique.add(tripletJoined);
						triplets.push(tripletSorted);
					}
				}
			}
		}
	}

	return triplets;
};
