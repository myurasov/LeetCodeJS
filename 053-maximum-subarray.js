// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
    var m = -Infinity, mem = {};

    function _arraySum(nums, start, end, mem) {
        var key = start + ':' + end;

        if (mem[key] === undefined) {
            if (start === end) {
                mem[key] = nums[start];
            } else {
                mem[key] = _arraySum(nums, start, end - 1, mem) + nums[end];
            }

            if (mem[key] > m) m = mem[key];
        }

        return mem[key];
    }

    for (var i = 0; i < nums.length; i++) {
        _arraySum(nums, i, nums.length - 1, mem);
    }

    return m;
};

