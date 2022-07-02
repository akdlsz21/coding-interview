var numIslands = function (grid) {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			let val = grid[i][j];
			if (val === '1') {
				count += dfs(grid, i, j);
			}
		}
	}

	return count;
};

function dfs(grid, i, j) {
	if (
		i < 0 ||
		i >= grid.length ||
		j < 0 ||
		j >= grid[i].length ||
		grid[i][j] === '0'
	)
		return 0;
	grid[i][j] = '0';
	dfs(grid, i - 1, j);
	dfs(grid, i + 1, j);
	dfs(grid, i, j - 1);
	dfs(grid, i, j + 1);

	return 1;
}

const grid = [
	['1', '1', '0', '0', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '1', '0', '0'],
	['0', '0', '0', '1', '1'],
];
numIslands(grid); //?
