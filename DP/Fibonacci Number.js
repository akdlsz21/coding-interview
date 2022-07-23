var fib = function (n) {
	const map = {};

	function helper(n) {
		if (n <= 0) return 0;
		if (n <= 2) return 1;
		if (map[n]) return map[n];

		map[n] = helper(n - 1) + helper(n - 2);
		return map[n];
	}
	return helper(n);
};

fib(1); //?
