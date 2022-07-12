function func(str) {
	var str = str.replace(/\s/g, '');
	const newObj = {};

	let max = '';
	let maxCount = 0;

	for (let char of str) {
		if (!newObj[char]) {
			newObj[char] = 1;
		} else {
			newObj[char]++;
		}

		if (newObj[char] > maxCount) {
			maxCount = newObj[char];
			max = char;
		}
	}

	return max;
}

func('abcddcba'); //?
