// https://leetcode.com/problems/sliding-window-maximum/

// Double-ended queue
function DEQueue() {}
DEQueue.prototype = new Array;
DEQueue.prototype.getLeft = function () { return this[0]; }
DEQueue.prototype.getRight = function () { return this[this.length - 1]; }
DEQueue.prototype.removeLeft = Array.prototype.shift;
DEQueue.prototype.removeRight = Array.prototype.pop;
DEQueue.prototype.pushRight = Array.prototype.push;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	var w = new DEQueue();
	var m = [];
	var i = -1;

	for (var a = 0; a < nums.length; a++) {

		while (w.length > 0 && w.getLeft() < (a - k + 1)) {
			w.removeLeft();
		}

		while (w.length > 0 && nums[w.getRight()] < nums[a]) {
			w.removeRight();
		}

		w.pushRight(a);

		if (a >= k - 1) {
			m.push(nums[w[0]]);
		}
	}
	return m;
};
