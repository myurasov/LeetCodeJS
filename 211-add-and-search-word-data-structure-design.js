// https://leetcode.com/problems/add-and-search-word-data-structure-design/

// Trie-based structure

var TrieNode = function () {
	this.children = new Map();
	this.isLeaf = false;
};

//

/**
 * @constructor
 */
var WordDictionary = function () {
	this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function (word, _root) {
	if (_root === undefined) _root = this.root;

	if (word.length > 0) {
		var c = word.charAt(0);

		if (!_root.children.has(c)) {
			_root.children.set(c, new TrieNode());
		}

		// go one level deeper
		this.addWord(word.substr(1), _root.children.get(c));
	} else {
		_root.isLeaf = true;
	}
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function (word, _root) {
	if (_root === undefined) _root = this.root;

	if (word.length > 0) {
		var c = word.charAt(0);

		if (_root.children.has(c)) {

			// go one level deeper
			return this.search(word.substr(1), _root.children.get(c));

		} else if (c === '.') {

			// iterate through all the children

			var childrenIterator = _root.children.entries();
			var child;

			while (child = childrenIterator.next()) {
				if (child.done) break;

				if (this.search(word.substr(1), child.value[1])) {
					return true;
				}
			}

			return false;

		} else {
			// mismatch found
			return false;
		}

	}

	return _root.isLeaf;
};
