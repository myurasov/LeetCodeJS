// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

Array.prototype.peek = function () {
	return this.length > 0 ? this[this.length - 1] : undefined;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	var r = [];
	var a = new Set();

	while (head) {
		if (a.has(head.val)) {
			// found duplicate
			while (r.peek() == head.val) {
				r.pop();
			}
		} else {
			r.push(head.val);
		}

		a.add(head.val);
		head = head.next;
	}

	return r;
};

