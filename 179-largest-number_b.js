// https://leetcode.com/problems/largest-number/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
	nums = nums.sort(cmp);
	return nums.join('').replace(/^0+/g, '0');
};

/**
 * Compare ab and ba as strings char-by-char to avoid overflow
 */
function cmp(a, b) {
	a = a.toString();
	b = b.toString();
	var ab = a + b;
	var ba = b + a;

	for (var i = 0; i < ab.length; i++) {
		var abc = ab.charCodeAt(i);
		var bac = ba.charCodeAt(i);
		var c = Math.sign(bac - abc);
		if (c !== 0) return c;
	}

	return 0;
}
