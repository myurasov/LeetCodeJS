// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/

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
var longestConsecutive = function (root) {

    var res = 0;
    walk(root);

    function walk(node, prev, len) {
        if (node) {
            len = node.val - prev === 1 ? len + 1 : 1;
            if (len > res) res = len;
            walk(node.left, node.val, len);
            walk(node.right, node.val, len);
        }
    }

    return res;
};

//

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var r = new TreeNode(1);
r.right = new TreeNode(3);
r.right.left = new TreeNode(2);
r.right.right = new TreeNode(4);
r.right.right.right = new TreeNode(5);

console.log(longestConsecutive(r));
