// https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/

/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function (image, x, y) {

    var w = image.length;
    var h = w > 0 ? image[0].length : 0;
    var minX = x, maxX = x - 1;
    var minY = y, maxY = y - 1;

    walk(image, x, y);

    function walk(image, x, y) {
        if (!image[x] || '1' !== image[x][y]) return;

        // mark pixel
        image[x][y] = '.';

        // mins/maxs
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        walk(image, x, y - 1); // top
        walk(image, x + 1, y); // right
        walk(image, x, y + 1); // bottom
        walk(image, x - 1, y); // left
    }

    return (maxX - minX + 1) * (maxY - minY + 1);
};
