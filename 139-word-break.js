// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    var m = [];
    return _wb(0);

    function _wb(start) {
        if (undefined !== m[start]) return m[start];

        for (var i = start + 1; i <= s.length; i++) {
            var ss = s.substr(start, i - start);
            if (wordDict.has(ss) && _wb(i)) {
                return (m[start] = true);
            }
        }

        return (m[start] = s.length === start);
    }
};
