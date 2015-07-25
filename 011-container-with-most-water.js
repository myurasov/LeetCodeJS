// https://leetcode.com/problems/container-with-most-water/

// O(n) time

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	var area = 0;

	var left = 0, right = height.length - 1;

	while (left < right) {
		area = Math.max(area, Math.min(height[left], height[right]) * (right - left));

		if (height[left] > height[right]) {
			right--;
		} else {
			left++;
		}
	}

	return area;
};
