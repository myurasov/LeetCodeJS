// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

	// 2 pointers, p2 is n items ahead of p1
	var p1 = null;
	var p2 = head;

	var r = [];

	while (p1 || p2) {

		if (--n === 0) {
			// launch first pointer
			p1 = head;
		}

		if (p1 /* p1 is launched */ && !(p2 && p2.next === null)  /* p2  is not at the last item */) {
			r.push(p1.val);
		}

		if (p2) p2 = p2.next;
		if (p1) p1 = p1.next;
	}

	return r;
};

