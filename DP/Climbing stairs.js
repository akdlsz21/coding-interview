var climbStairs = function (n) {
	const map = {};

	function helper(n) {
		if (n === 1) return 1;
		if (n === 2) return 2;
		if (n === 3) return 3;

		if (!map[n]) map[n] = helper(n - 1) + helper(n - 2);

		return map[n];
	}
	return helper(n);
};

climbStairs(5); //?
