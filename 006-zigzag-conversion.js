/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

	if (numRows === 1) return s;

	var v = 1, // vertical step
		h = 0, // horizontal step
		r = 0,
		rows = [];

	for (var i = 0; i < s.length; i++) {
		rows[r] = rows[r] ? rows[r] + s.charAt(i) : s.charAt(i);

		if (r === numRows - 1 && h === 0) {
			v = -1;
			h = 1;
		} else if (r === 0 && h === 1) {
			v = 1;
			h = 0;
		}

		r += v;
	}

	return rows.join('');

};
