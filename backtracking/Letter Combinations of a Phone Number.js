var letterCombinations = function (digits) {
	if (!digits.length) return [];

	const result = [];

	const alphas = {
		2: 'abc',
		3: 'def',
		4: 'ghi',
		5: 'jkl',
		6: 'mno',
		7: 'pqrs',
		8: 'tuv',
		9: 'wxyz',
	};

	const dfs = (digits, index, str) => {
		if (index === digits.length) {
			result.push(str);
			return;
		}
		const alpha = alphas[digits[index]];
		for (let i = 0; i < alpha.length; i++) {
			dfs(digits, index + 1, str + alpha[i]);
		}
	};

	dfs(digits, 0, '');
	return result;
};

letterCombinations('23'); //?
