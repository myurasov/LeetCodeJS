// https://leetcode.com/problems/binary-tree-level-order-traversal-ii//**

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
	var res = _levelOrderBottom(root, 0, []);
	return res.reverse();
}

var _levelOrderBottom = function (root, level, res) {
	if (root) {
		if (res[level] === undefined) res[level] = [];
		res[level].push(root.val);

		if (root.left) {
			_levelOrderBottom(root.left, level + 1, res);
		}

		if (root.right) {
			_levelOrderBottom(root.right, level + 1, res);
		}
	}

	return res;
};
