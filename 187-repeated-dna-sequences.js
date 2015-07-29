// https://leetcode.com/problems/repeated-dna-sequences/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
	var windowSize = 10;

	var hash = new RollingDNAHash(windowSize);
	var seen = new Set();
	var inResult = new Set();
	var result = [];

	for (var a = 0; a < s.length; a++) {
		hash.add(s.charAt(a));

		if (a > windowSize - 1) {
			if (seen.has(hash.value) && !inResult.has(hash.value)) {
				result.push(s.substr(a - windowSize + 1, windowSize));
				inResult.add(hash.value);
			}
		}

		seen.add(hash.value);
	}

	return result;
};

/**
 * Rolling hash implementation
 */
function RollingDNAHash(windowSize) {
	this._windowSize = windowSize;
	this._mask = ((1 << 2 * this._windowSize) - 1);
	this._codes = {A: 0, C: 1, T: 2, G: 3};
	this._length = 0;
	this._lengthSize = Math.ceil(Math.log2(windowSize))
	this.value = 0;
}

RollingDNAHash.prototype.add = function (c) {
	var d = this._codes[c];
	this._length += this._length < this._windowSize ? 1 : 0;
	this.value = (this._length << this._windowSize * 2 + this._lengthSize) 	// <_lengthSize> bytes for lenght
				 + ((this.value << 2) & this._mask)							// 2*<_windowSize> bytes for data
				 + d;
}
