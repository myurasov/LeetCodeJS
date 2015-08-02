// https://leetcode.com/problems/number-of-digit-one/

// DP version

var countDigitOne = function (n, memory) {
	if (n <= 0) return 0;

	if (memory === undefined) {
		memory = new Map();
	} else if (memory[n] !== undefined) {
		return memory[n];
	}

	var maxTenPower = 1;
	var topMostDigit = n;
	var constant = 0;

	while (topMostDigit >= 10) {
		topMostDigit = Math.floor(topMostDigit / 10);
		maxTenPower = maxTenPower * 10;
	}

	if (topMostDigit > 1) {
		constant = maxTenPower;
	} else {
		constant = n % maxTenPower + 1;
	}

	return (memory[n] =
			constant +
			topMostDigit * countDigitOne(maxTenPower - 1, memory) +
			countDigitOne(n % maxTenPower, memory)
	);
}
