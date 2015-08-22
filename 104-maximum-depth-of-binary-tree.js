// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, _depth) {
	if (undefined === _depth) _depth = 0;

	if (root === null) {
		return _depth;
	} else {
		var l = maxDepth(root.left, _depth + 1);
		var r = maxDepth(root.right, _depth + 1)
		return Math.max(l, r);
	}
};
