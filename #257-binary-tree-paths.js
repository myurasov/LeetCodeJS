// https://leetcode.com/problems/binary-tree-paths/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root, _path, _paths) {
	if (_path === undefined) _path = [];
	if (_paths === undefined) _paths = new Set();

	if (root) {
		binaryTreePaths(root.left, _path.concat(root.val), _paths);
		binaryTreePaths(root.right, _path.concat(root.val), _paths);
	} else if (_path.length) {
		_paths.add(_path.join('->'));
	}

	var res = [];
	_paths.forEach(function (a) {
		res.push(a)
	});

	return res;
};
