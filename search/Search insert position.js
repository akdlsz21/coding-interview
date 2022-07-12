const searchInsert = (nums, target) => {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		let curr = nums[mid];

		if (curr === target) return mid;
		else if (curr > target) right = mid - 1;
		else if (curr < target) left = mid + 1;
	}
	return left;
};
