// https://leetcode.com/problems/container-with-most-water/

// O(n) time

#define MIN(a,b) (((a)<(b))?(a):(b))
#define MAX(a,b) (((a)>(b))?(a):(b))

int maxArea(int* height, int heightSize) {

	int area = 0;

	int left = 0;
	int right = heightSize - 1;

	while (left < right) {
		area = MAX(area, MIN(height[left], height[right]) * (right - left));

		if (height[left] > height[right]) {
			right--;
		} else {
			left++;
		}
	}

	return area;

}
