// https://leetcode.com/problems/flatten-2d-vector/

/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function (vec2d) {
    this.data = vec2d;
};

Vector2D.prototype._advance = function () {
    // skip empty rows
    while (this.data[0] && 0 === this.data[0].length) {
        this.data.shift();
    }
};

/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function () {
    this._advance();
    return this.data.length > 0;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function () {
    return this.data[0].shift();
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

var vec2d = [
    [1, 2],
    [3],
    [4, 5, 6]
];

// vec2d = [[], [3]];

var i = new Vector2D(vec2d), a = [];

while (i.hasNext()) {
    a.push(i.next());
}

console.log(a);
