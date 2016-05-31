// https://leetcode.com/problems/reverse-linked-list/

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    var prev = null, nextTmp;

    while (head) {
        nextTmp = head.next
        head.next = prev;
        prev = head;
        head = nextTmp;
    }

    return prev;
};

// var l = new ListNode(1);
// l.next = new ListNode(2);
// l.next.next = new ListNode(3);
// // l.next.next.next = new ListNode(4);
// // l.next.next.next.next = new ListNode(5);
//
// console.log(reverseList(l));
