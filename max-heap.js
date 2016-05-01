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
	this._build();
}

MaxHeap.prototype.insert = function (k) {
	this.data.push(k);
	this._build();
}

MaxHeap.prototype.max = function () {
	return this.data[0];
}

MaxHeap.prototype.extractMax = function () {
	var res = this.data.shift();
	this._build();
	return res;
}

MaxHeap.prototype.updateKey = function (x, k) {
	if (x < this.data.length) {
		this.data[x] = k;
		this._build();
	}
}

MaxHeap.prototype._build = function () {
	for (var x = Math.floor(this.data.length / 2); x >= 0; x--) {
		this._heapify(x);
	}
}

MaxHeap.prototype._heapify = function (x) {
	var left = 2 * x + 1;
	var right = 2 * x + 2;
	var largest = x;

	if (left < this.data.length && this.data[left] > this.data[largest]) {
		largest = left;
	}

	if (right < this.data.length && this.data[right] > this.data[largest]) {
		largest = right;
	}

	if (largest !== x) {
		var tmp = this.data[x];
		this.data[x] = this.data[largest];
		this.data[largest] = tmp;
		this._heapify(largest);
	}
}


