# https://leetcode.com/problems/remove-duplicates-from-sorted-array/

class Solution:
    # @param {integer[]} nums
    # @return {integer}
    def removeDuplicates(self, nums):

        i = 0
        u = 0

        while i < len(nums):
            if i != u:
                nums[u] = nums[i]

            while i < len(nums) - 1 and nums[i] == nums[i + 1]:
                i = i + 1

            u = u + 1
            i = i + 1

        return u
