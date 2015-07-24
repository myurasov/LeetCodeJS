// https://leetcode.com/problems/median-of-two-sorted-arrays/

// O(M * log(N)) solution

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	for (var i = 0; i < nums2.length; i++) {
		var insertionPoint = findInsertionPoint(nums1, nums2[i]);
		nums1.splice(insertionPoint + 1, 0 /* delete */, nums2[i] /* insert */);
	}

	// find median
	if (nums1.length % 2 === 0) {
		return (nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2]) / 2;
	} else {
		return nums1[(nums1.length - 1) / 2];
	}
};


/**
 * Find the index after an element can be inserted in a sorted array so it remains sorted
 * Operates in O(log(N)) time
 */
function findInsertionPoint(array, needle, start, end) {

	if (start === undefined) start = 0;
	if (end === undefined) end = array.length - 1;
	if (end < start) return end;

	var middle = parseInt((start + end) / 2);

	if (array[middle] === needle) {
		return middle;
	} else if (needle >= array[middle] && needle < array[middle + 1]) {
		return middle;
	} else if (array[middle] < needle) {
		return findInsertionPoint(array, needle, middle + 1, end);
	} else if (array[middle] > needle) {
		return findInsertionPoint(array, needle, start, middle - 1);
	}

	return -1;
}
