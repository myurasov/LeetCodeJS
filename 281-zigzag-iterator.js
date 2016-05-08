// https://leetcode.com/problems/zigzag-iterator/

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    var vectors = [v1, v2];
    var maxLen = Math.max(v1.length, v2.length);

    this._res = [];

    for (var i = 0; i < maxLen; i++) {
        for (var v = 0; v < vectors.length; v++) {
            if (i < vectors[v].length) {
                this._res.push(vectors[v][i]);
            }
        }
    }

    this._i = 0;
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return this._i < this._res.length;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    return this._res[this._i++];
};
