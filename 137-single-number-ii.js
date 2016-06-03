// https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var singleNum = 0;

    for (var bit = 0; bit < 32; bit++) {
        var oneBitsCount = 0;

        // count bumber of 1 bits at this position
        for (var i = 0; i < nums.length; i++) {
            oneBitsCount += (nums[i] >> bit) & 1;
        }

        if (1 === oneBitsCount % 3 /* every 3 1-bits not from our number */) {
            singleNum = singleNum | (1 << bit);
        }
    }

    return singleNum;
};

console.log(singleNumber([123, 123, 123, 76, 97, 97, 97]));
