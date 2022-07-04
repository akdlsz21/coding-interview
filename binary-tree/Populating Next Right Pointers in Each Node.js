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
		cont.push(...arr);
		helper(arr);
	}

	for (let i = 0; i < cont.length; i++) {
		if (!cont[i].next) {
			const te = cont.slice(i + 1);
			cont[i + 1] = '#';
			cont.concat();
		}
	}
};

function helper(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) break;
		arr[i].next = arr[i + 1];
	}
}
