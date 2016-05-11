// https://leetcode.com/problems/flip-game-ii/

/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function (s) {
    return _canWin(s, new Map());
};

var _canWin = function (s, m) {

    if (m.has(s)) {
        return m.get(s);
    }

    for (var i = 0; i < s.length - 1; i++) {
        if ('++' === s.substr(i, 2)) {
            var f = s.substr(0, i) + '--' + s.substr(i + 2);

            // player guarantee a win if opponent can't win after his move
            if (!_canWin(f, m)) {
                m.set(s, true);
                return true;
            }
        }
    }

    m.set(s, false);
    return false;
};
