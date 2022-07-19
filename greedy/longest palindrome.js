var longestPalindrome = function (str) {
	const map = {};
	for (let char of str) {
		map[char] = (map[char] || 0) + 1;
	}

	let count = 0;
	let oddMax = 0;
	for (const key in map) {
		if (map[key] % 2 === 0) {
			count += map[key];
		} else {
			count += map[key];
			oddMax++;
		}
	}

	return oddMax > 0 ? count - oddMax + 1 : count;
};

longestPalindrome('a'); //?
