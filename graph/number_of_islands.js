var numIslands = function (grid) {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			count += dfs(grid, i, j);
		}
	}

	return count;
};

function dfs(grid, i, j) {
	let isValidCondition =
		i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;

	if (isValidCondition && grid[i][j] === '1') {
		grid[i][j] = '0';
		dfs(grid, i + 1, j);
		dfs(grid, i - 1, j);
		dfs(grid, i, j + 1);
		dfs(grid, i, j - 1);
	} else return 0;

	return 1;
}

numIslands([
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '0'],
]); //?
