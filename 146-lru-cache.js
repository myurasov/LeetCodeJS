// https://leetcode.com/problems/lru-cache/

/**
 * @constructor
 */
var LRUCache = function (capacity) {
	this._capacity = capacity;
	this._minheap = [];
	this._indexes = {};
	this._time = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function (key) {
	if (undefined === this._indexes[key]) {
		return -1;
	} else {
		this._minheap[this._indexes[key]].time = this._time++; // update access time
		this._buildHeap();
		return this._minheap[this._indexes[key]].value;
	}
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function (key, value) {
	if (undefined === this._indexes[key]) {

		if (this._minheap.length === this._capacity) {
			// remove oldest value
			delete this._indexes[this._minheap[0].key]; // remove from key-to index map
			this._minheap.shift(); // remove from heap
		}

		// insert new key
		this._indexes[key] = this._minheap.length;
		this._minheap.push({key, value, time: this._time++});

	} else {
		// we have a key, update it
		this._minheap[this._indexes[key]] = {key, value, time: this._time++};
	}

	this._buildHeap();
};

LRUCache.prototype._buildHeap = function () {

	var _cmp = function (a, b) {
		return b.time - a.time;
	}

	const _heapify = (function (x) {
		var left = 2 * x + 1;
		var right = 2 * x + 2;
		var largest = x;

		if (left < this._minheap.length && _cmp(this._minheap[left], this._minheap[largest]) > 0) {
			largest = left;
		}

		if (right < this._minheap.length && _cmp(this._minheap[right], this._minheap[largest]) > 0) {
			largest = right;
		}

		if (largest !== x) {
			var tmp;

			tmp = this._indexes[this._minheap[x].key];
			this._indexes[this._minheap[x].key] = this._indexes[this._minheap[largest].key];
			this._indexes[this._minheap[largest].key] = tmp;

			tmp = this._minheap[x];
			this._minheap[x] = this._minheap[largest];
			this._minheap[largest] = tmp;

			_heapify(largest);
		}
	}).bind(this);

	for (var x = Math.floor(this._minheap.length / 2); x >= 0; x--) {
		_heapify(x);
	}
}
