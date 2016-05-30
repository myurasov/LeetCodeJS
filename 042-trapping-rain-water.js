// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    var ltr = new Uint32Array(height.length);
    var rtl = new Uint32Array(height.length);
    var maxLtr = 0, maxRtl = 0, left = 0, right = 0;

    // compute maxs: left-to-right, right-to-left
    for (left = 0; left < height.length; left++) {
        right = height.length - 1 - left;
        if (height[right] > maxRtl) maxRtl = height[right];
        rtl[right] = maxRtl;
        if (height[left] > maxLtr) maxLtr = height[left];
        ltr[left] = maxLtr;
    }

    // water[i] = min(ltr, rtl) - height[i]
    var water = 0;

    for (left = 0; left < height.length; left++) {
        water += (ltr[left] < rtl[left] ? ltr[left] : rtl[left]) - height[left];
    }

    return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6);
