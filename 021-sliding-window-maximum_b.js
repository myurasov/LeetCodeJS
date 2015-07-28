// https://leetcode.com/problems/sliding-window-maximum/

function DoubleEndedQueue() {}
DoubleEndedQueue.prototype = new Array();
DoubleEndedQueue.prototype.getLeft = function () { return this[0]; };
DoubleEndedQueue.prototype.getRight = function () { return this[this.length - 1]; };
DoubleEndedQueue.prototype.removeLeft = Array.prototype.shift;
DoubleEndedQueue.prototype.removeRight = Array.prototype.pop;
DoubleEndedQueue.prototype.pushRight = Array.prototype.push;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	var w = new DoubleEndedQueue();
	var m = [];
	var i = -1;

	for (var a = 0; a < nums.length; a++) {

		// remove elements not in the current window
		while (w.length > 0 && w.getLeft() < (a - k + 1)) {
			w.removeLeft();
		}

		// if previously added candidate is not current maximum, remove it
		while (w.length > 0 && nums[w.getRight()] < nums[a]) {
			w.removeRight();
		}

		// add "candidate" index
		w.pushRight(a);

		if (a >= k - 1) {
			m.push(nums[w.getLeft()]);
		}
	}
	return m;
};
