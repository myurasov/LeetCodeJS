/**
 * Max heap implementation
 * @author Mikhail Yurasov <me@yurasov.me>
 */

/**
 * @param {[]} data
 * @constructor
 */
function MaxHeap(data) {
	this.data = data;
	this._heapify();
}

MaxHeap.prototype.insert = function (x) {
	this.data.push(x);
	this._heapify();
}

MaxHeap.prototype.max = function () {
	if (this.data.length > 0) {
		return this.data[0];
	}
}

MaxHeap.prototype.extractMax = function () {
	if (this.data.length > 0) {
		var res = this.data.shift();
		this._heapify();
		return res;
	}
}

MaxHeap.prototype.updateKey = function (x, k) {
	if (this._has(x)) {
		this.data[x] = k;
		this._heapify();
	}
}

MaxHeap.prototype._has =  function (x) {
	return x < this.data.length;
}

MaxHeap.prototype._heapify = function (x) {

	x = x || 0;

	var left = 2 * x + 1;
	var right = 2 * x + 2;

	var swap = (function (a, b) {
		var tmp = this.data[a];
		this.data[a] = this.data[b];
		this.data[b] = tmp;
	}).bind(this);

	var violatesMaxHeap = (function (root, child) {
		return this.data[root] < this.data[child];
	}).bind(this);

	if (this._has(left) && !this._has(right)) {

		this._heapify(left);

		if (violatesMaxHeap(x, left)) {
			swap(x, left);
		}

	} else if (this._has(left) && this._has(right)) {

		this._heapify(left);
		this._heapify(right);

		// pick a bigger child for verification
		var child = this.data[left] > this.data[right] ? left : right;

		if (violatesMaxHeap(x, child)) {
			swap(x, child);
		}

	}
}

m = new MaxHeap([16, 4, 10, 14, 7, 9, 3, 2, 8, 1, 1000])
m.updateKey(9, 10000);
// m = new MaxHeap([])
console.log(m.data);
console.log(m.extractMax());
console.log(m.data);
