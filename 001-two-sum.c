// https://leetcode.com/problems/two-sum/

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target) {
    int i = 0;
    int j = 0;
    int num_i = 0;

    int* res = malloc(sizeof(int) * 2);

    for (i = 0; i < numsSize; i++) {
        num_i = nums[i];

        for (j = i + 1; j < numsSize; j++) {
            if (num_i + nums[j] == target) {
                res[0] = i + 1;
                res[1] = j + 1;
                return res;
            }
        }
    }

    return res;
}
