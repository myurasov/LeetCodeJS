// https://leetcode.com/problems/binary-tree-level-order-traversal/

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
var levelOrder = function (root) {

	if (!root) return [];

	var nextLevel = [root];
	var levels = [];

	while (nextLevel.length > 0) {

		levels.push(nextLevel.map(function (e) {
			return e.val
		}));

		var currentLevel = nextLevel;
		nextLevel = [];

		for (var i = 0; i < currentLevel.length; i++) {
			var n = currentLevel[i];
			if (n.left) nextLevel.push(n.left);
			if (n.right) nextLevel.push(n.right);
		}
	}

	return levels;
};
