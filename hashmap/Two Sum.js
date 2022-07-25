var twoSum = function (nums, target) {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		let checkFor = target - nums[i];

		if (map[nums[i]] !== undefined) return [map[nums[i]], i];

		if (!map[checkFor]) {
			map[checkFor] = i;
		}
		map;
	}
};

twoSum([3, 3], 6); //?
