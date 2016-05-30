// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    var ltr = [];
    var rtl = [];
    var m;

    m = -Infinity;

    for (var i = 0; i < height.length; i++) {
        if (height[i] > m) m = height[i];
        ltr.push(m);
    }

    m = -Infinity;

    for (var i = height.length - 1; i >= 0; i--) {
        if (height[i] > m) m = height[i];
        rtl.unshift(m);
    }

    // water[i] = min(ltr, rtl) - height[i]
    var w = 0;

    for (var i = 0; i < height.length; i++) {
        w += (ltr[i] < rtl[i] ? ltr[i] : rtl[i]) - height[i];
    }

    return w;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6);
