var isHappy = function (n) {
	const map = {};
	return helper(n, map);
};

function helper(num, map) {
	if (!map[num]) {
		let str = String(num);
		let res = str.split('').reduce((accu, curr) => accu + curr * curr, 0);
		map[num] = res;
		if (res === 1) return true;
		return helper(res, map);
	}
	return false;
}

isHappy(1111111); //?
