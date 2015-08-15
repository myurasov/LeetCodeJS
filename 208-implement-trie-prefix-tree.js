// https://leetcode.com/problems/implement-trie-prefix-tree/

/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function () {
	this.children = new Map();
	this.isLeaf = false;
};

var Trie = function () {
	this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function (word) {
	var p = this._findInsertionNode(word, this.root);
	var node = p.node;

	for (var i = 0; i < p.postfix.length; i++) {
		var c = p.postfix.charAt(i);
		node.children.set(c, new TrieNode());
		node = node.children.get(c);
	}

	node.isLeaf = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function (word) {
	var p = this._findInsertionNode(word, this.root);
	return p.node.isLeaf && p.postfix === '';
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function (prefix) {
	var p = this._findInsertionNode(prefix, this.root);
	return p.postfix === '';
};

/**
 * Finds node for insertion and remaining part of the word
 *
 * @param {string}  prefix
 * @param {TrieNode} root
 * @returns {*}
 * @private
 */
Trie.prototype._findInsertionNode = function (prefix, root) {
	for (var i = 0; i < prefix.length; i++) {
		var c = prefix.charAt(i);

		if (root.children.has(c)) {
			return this._findInsertionNode(prefix.substr(i + 1), root.children.get(c));
		} else {
			break;
		}
	}

	return {node: root, postfix: prefix};
};
