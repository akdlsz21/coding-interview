class Ball {
	constructor(position) {
		this.position = position;
	}

	moveRight(right) {
		if (right === undefined) {
			this.stuck();
			return;
		}
		this.position++;
	}

	moveLeft(left) {
		if (left === undefined) {
			this.stuck();
			return;
		}
		this.position--;
	}

	stuck() {
		this.position = -1;
	}
}

var findBall = function (grid) {
	const ballArr = new Array(grid[0].length).fill(0).map((e, i) => new Ball(i));
	ballArr;
	for (const ball of ballArr) {
		helper(ball);
	}

	ballArr;

	function helper(ball) {
		for (let i = 0; i < grid.length; i++) {
			let direction = grid[i][ball.position];
			let directionRight = grid[i][ball.position + 1];
			let directionLeft = grid[i][ball.position - 1];

			ball.position; //?
			if (direction === undefined) {
				ball.stuck();
				break;
			}
			if (direction === 1) {
				if (directionRight === -1 || directionRight === undefined) {
					ball.stuck();
					break;
				}
				ball.moveRight(direction);
			} else if (direction === -1) {
				if (directionLeft === 1 || directionLeft === undefined) {
					ball.stuck();
					break;
				}
				ball.moveLeft(direction);
				ball.position;
			}
			if (ball.position === -1) break;
		}
	}

	return ballArr.map((e) => e.position);
};

const grid = [[1]];
findBall(grid);
