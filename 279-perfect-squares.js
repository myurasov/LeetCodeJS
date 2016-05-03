// https://leetcode.com/problems/perfect-squares/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    var m1 = new Set();

    var res = n;
    squares(n, 1);
    return res;

    function squares(n, c) {
        var key = n + ':' + c;

        if (!m1.has(key)) {
            m1.add(key);

            var o = n;

            while (n > 0) {
                var s = largestSquare(n);

                if (o === s) {
                    if (c < res) {
                        res = c;
                    }
                } else if (c + 1 < res /* we already have better result */) {
                    squares(o - s, c + 1)
                }

                n = s - 1;
            }
        }
    }

    function largestSquare(n) {
        var s = ~~Math.sqrt(n);
        return s * s;
    }
}
