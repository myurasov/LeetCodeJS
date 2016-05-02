/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	var res = [];
	var len = 0;
	var start;

	for (var i = 0; i < nums.length + 1; i++) {
		if (1 !== nums[i] - nums[i - 1]) {

			if (len === 1) {
				res.push(String(start));
			} else if (len > 1) {
				res.push(start + '->' + nums[i - 1]);
			}

			start = nums[i];
			len = 1;
		} else {
			len++;
		}
	}

	return res;
};
