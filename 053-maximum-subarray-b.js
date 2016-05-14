// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
    var m = -Infinity, sum = 0;

    for (var i = 0; i < nums.length; i++) {
        // if sum is negative, we'll do better without previous elements
        if (sum < 0) sum = 0;

        sum += nums[i];
        if (sum > m) m = sum;
    }

    return m;
};

