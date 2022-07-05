var coinChange = function (coins, amount) {
	const map = {};
	function dp(n) {
		if (map[n]) return map[n];
		if (n === 0) return 1;
		if (n < 0) return -1;
		let min = Infinity;

		for (let coin of coins) {
			let res = dp(n - coin);
			min = Math.min(min, 1 + res);
		}

		map[n] = min;
		return min;
	}

	return dp(amount) === Infinity ? -1 : dp(amount) - 1;
};

coinChange([1, 2, 5], 11);
