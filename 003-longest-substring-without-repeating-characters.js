// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

	// has .clear() nethod which performs much faster than creating new object
	var h = new Set();
	var m = 0;

	for (var i = 0; i < s.length; i++) {
		h.clear();
		h.add(s.charAt(i));

		var mm = 1;

		for (j = i + 1; j < s.length; j++) {
			var jc = s.charAt(j);

			if (h.has(jc)) {
				break;
			} else {
				mm++;
				h.add(jc);
			}
		}

		m = Math.max(m, mm);
	}

	return m;
};
