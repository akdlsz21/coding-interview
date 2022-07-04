var uniquePaths = function (m, n) {
	const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
	arr;
	for (let i = 0; i < m; i++) {
		arr[i][0] = 1;
	}
	for (let i = 0; i < n; i++) {
		arr[0][i] = 1;
	}

	for (let i = 1; i < arr.length; i++) {
		for (let j = 1; j < arr[0].length; j++) {
			arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
		}
	}

	return arr[m - 1][n - 1];
};

uniquePaths(3, 5);
