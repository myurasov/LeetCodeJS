// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    var m = 0;

    for (var i = 0; i < s.length; i++) {
        var h = Array(256);
        h[s.charCodeAt(i)] = 1;

        var mm = 1;

        for (j = i + 1; j < s.length; j++) {
            var jc = s.charCodeAt(j);

            if (1 === h[jc]) {
                break;
            } else {
                mm++;
                h[jc] = 1;
            }
        }

        if (mm > m) m = mm;
    }

    return m;
};
