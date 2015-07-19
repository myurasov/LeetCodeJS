// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var c = 0;
	var r = [];

	do {
		var l1v = l1 ? l1.val : 0;
		var l2v = l2 ? l2.val : 0;

		var d = l1v + l2v + c;

		c = (d - d  % 10) / 10;
		d = d % 10;

		r.push(d);

		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	} while (l1 || l2)

	if (c > 0) {
		r.push(c);
	}

	return r;
};
