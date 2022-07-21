var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let mid = Math.floor((right - left) / 2);
	if (nums[left] === target) return left;
	if (nums[right] === target) return right;

	while (left < right) {
		mid = Math.floor(left + (right - left) / 2);

		let midNum = nums[mid];
		if (midNum === target) {
			return mid;
		} else if (midNum < target) {
			left = mid + 1;
		} else if (midNum > target) {
			right = mid - 1;
		}
	}

	return -1;
};

search([-1, 0, 3, 5, 9, 12], 2); //?
