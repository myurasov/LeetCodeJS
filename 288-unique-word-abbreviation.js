// https://leetcode.com/problems/unique-word-abbreviation/

/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function (dictionary) {
	this._mem = new Map();
	this._abbrs = new Map();

	for (var i = 0; i < dictionary.length; i++) {
		var abbr = this._getAbbr(dictionary[i]);

		if (!this._abbrs.has(abbr)) {
			this._abbrs.set(abbr, new Set());
		}

		this._abbrs.get(abbr).add(dictionary[i]);
	}
};

ValidWordAbbr.prototype._getAbbr = function (word) {
	if (word.length <= 2) {
		return word;
	} else {
		return word[0] + (word.length - 2) + word[word.length - 1];
	}
}

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
	var abbr = this._getAbbr(word);
	var words = this._abbrs[abbr];

	if (!this._abbrs.has(abbr) || (1 === this._abbrs.get(abbr).size && this._abbrs.get(abbr).has(word))) {
		return true;
	}

	return false;
};
