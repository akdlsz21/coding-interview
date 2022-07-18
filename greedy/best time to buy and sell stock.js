var maxProfit = function (prices) {
	let min = Infinity;
	let max = -Infinity;

	let maxProfit = 0;

	for (let i = 0; i < prices.length; i++) {
		let price = prices[i];

		if (price > max) {
			max = price;
		}
		if (price < min) {
			min = price;
			max = 0;
		}
		maxProfit = Math.max(max - min, maxProfit);
	}

	return maxProfit;
};

maxProfit([1, 2]);
