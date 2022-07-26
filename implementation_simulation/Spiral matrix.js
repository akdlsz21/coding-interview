var spiralOrder = function (matrix) {
	let left = 0;
	let right = matrix[0].length - 1;
	let top = 0;
	let bottom = matrix.length - 1;

	let direction = 'right';
	const result = [];

	while (top <= bottom && left <= right) {
		if (direction === 'right') {
			for (let i = left; i <= right; i++) {
				result.push(matrix[top][i]);
			}
			direction = 'down';
			top++;
		} else if (direction === 'down') {
			for (let i = top; i <= bottom; i++) {
				result.push(matrix[i][right]);
			}
			right--;
			direction = 'left';
		} else if (direction === 'left') {
			for (let i = right; i >= left; i--) {
				result.push(matrix[bottom][i]);
			}
			bottom--;
			direction = 'up';
		} else if (direction === 'up') {
			for (let i = bottom; i >= top; i--) {
				result.push(matrix[i][left]);
			}
			left++;
			direction = 'right';
		}
	}
	return result;
};

spiralOrder([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
]); //?
