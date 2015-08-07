// https://leetcode.com/problems/min-stack/

/**
 * @constructor
 */
var MinStack = function () {
	this.data = [];
	this.minIndex = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function (x) {
	this.data.push(x);

	if (this.minIndex.length === 0 || x < this.getMin()) {
		this.minIndex.push(this.data.length - 1);
	} else {
		this.minIndex.push(this.minIndex.last());
	}
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function () {
	this.minIndex.pop();
	this.data.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function () {
	return this.data.last();
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function () {
	return this.data[this.minIndex.last()];
};

Array.prototype.last = function () {
	return this[this.length - 1];
};
