// https://leetcode.com/problems/search-for-a-range/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	var i = bSearch(nums, target, 0, nums.length - 1);
	var i1 = i, i2 = i;

	if (i != -1) {
		// find lower bound
		while (i1-- > 0) {
			if (nums[i1] != target) break;
		}
		i1++;

		// find upper bound
		while (i2++ < nums.length) {
			if (nums[i2] != target) break;
		}
		i2--;
	}

	return [i1, i2]
};

// binary search
function bSearch(a, t, s, e) {
	var m = parseInt((s + e) / 2);

	if (a[m] === t) {
		return m;
	} else if (a[m] < t && e > s) {
		return bSearch(a, t, m + 1, e);
	} else if (a[m] > t && e > s) {
		return bSearch(a, t, s, m - 1);
	}

	return -1;
}
