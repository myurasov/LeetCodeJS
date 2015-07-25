// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {

	if (num <= 0) return '';

	var d = {};
	var r = '';

	d.n1000 = Math.floor(num / 1000);
	num -= d.n1000 * 1000;

	d.n900 = Math.floor(num / 900);
	num -= d.n900 * 900;

	d.n500 = Math.floor(num / 500);
	num -= d.n500 * 500;

	d.n400 = Math.floor(num / 400);
	num -= d.n400 * 400;

	d.n100 = Math.floor(num / 100);
	num -= d.n100 * 100;

	d.n90 = Math.floor(num / 90);
	num -= d.n90 * 90;

	d.n50 = Math.floor(num / 50);
	num -= d.n50 * 50;

	d.n40 = Math.floor(num / 40);
	num -= d.n40 * 40;

	d.n10 = Math.floor(num / 10);
	num -= d.n10 * 10;

	d.n9 = Math.floor(num / 9);
	num -= d.n9 * 9;

	d.n5 = Math.floor(num / 5);
	num -= d.n5 * 5;

	d.n4 = Math.floor(num / 4);
	num -= d.n4 * 4;

	d.n1 = num;

	while (d.n1000 --> 0) {
		r = r + 'M';
	}

	while (d.n900 --> 0) {
		r = r + 'CM';
	}

	while (d.n500 --> 0) {
		r = r + 'D';
	}

	while (d.n400 --> 0) {
		r = r + 'CD';
	}

	while (d.n100 --> 0) {
		r = r + 'C';
	}

	while (d.n90 --> 0) {
		r = r + 'XC';
	}

	while (d.n50 --> 0) {
		r = r + 'L';
	}

	while (d.n40 --> 0) {
		r = r + 'XL';
	}

	while (d.n10 --> 0) {
		r = r + 'X';
	}

	while (d.n9 --> 0) {
		r = r + 'IX';
	}

	while (d.n5 --> 0) {
		r = r + 'V';
	}

	while (d.n4 --> 0) {
		r = r + 'IV';
	}

	while (d.n1 --> 0) {
		r = r + 'I';
	}

	return r;

};
