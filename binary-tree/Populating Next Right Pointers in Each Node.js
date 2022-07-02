var connect = function (root) {
	const cont = [];
	const que = [root];

	while (que.length >= 1) {
		const arr = [];
		let count = que.length;

		while (count !== 0) {
			let curr = que.shift();
			if (curr.left) que.push(curr.left);
			if (curr.right) que.push(curr.right);
			arr.push(curr);
			count--;
		}

		helper(arr);
	}
};

function helper(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) break;
		arr[i].next = arr[i + 1];
	}
}
