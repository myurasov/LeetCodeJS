// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	s = s.toUpperCase();
	r = 0;

	while (s.substr(0, 1) === 'M') {
		r += 1000;
		s = s.substr(1);
	}

	while (s.substr(0, 2) === 'CM') {
		r += 900;
		s = s.substr(2);
	}

	while (s.substr(0, 1) === 'D') {
		r += 500;
		s = s.substr(1);
	}

	while (s.substr(0, 2) === 'CD') {
		r += 400;
		s = s.substr(2);
	}

	while (s.substr(0, 1) === 'C') {
		r += 100;
		s = s.substr(1);
	}

	while (s.substr(0, 2) === 'XC') {
		r += 90;
		s = s.substr(2);
	}

	while (s.substr(0, 1) === 'L') {
		r += 50;
		s = s.substr(1);
	}

	while (s.substr(0, 2) === 'XL') {
		r += 40;
		s = s.substr(2);
	}

	while (s.substr(0, 1) === 'X') {
		r += 10;
		s = s.substr(1);
	}

	while (s.substr(0, 2) === 'IX') {
		r += 9;
		s = s.substr(2);
	}

	while (s.substr(0, 1) === 'V') {
		r += 5;
		s = s.substr(1);
	}

	while (s.substr(0, 2) === 'IV') {
		r += 4;
		s = s.substr(2);
	}

	while (s.substr(0, 1) === 'I') {
		r += 1;
		s = s.substr(1);
	}

	return r;

};
