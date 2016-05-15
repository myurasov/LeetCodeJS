// https://leetcode.com/problems/missing-ranges/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    var missing = [];

    // add lower/upper bounds
    if (nums.length === 0 || lower < nums[0]) nums.unshift(lower - 1);
    if (nums.length === 0 || upper > nums[nums.length - 1]) nums.push(upper + 1);

    for (var i = 1; i < nums.length; i++) {
        // skip ranges
        while (1 === nums[i] - nums[i - 1]) i++;
        if (i === nums.length) break;

        var a = nums[i - 1] + 1;
        var b = nums[i] - 1;

        if (a === b) missing.push(String(a));
        else missing.push(a + '->' + b);
    }

    return missing;
};
