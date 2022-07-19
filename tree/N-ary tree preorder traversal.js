var preorder = function (root) {
	if (!root) return [];
	const result = [];
	const stack = [];
	let curr = null;

	stack.push(root);
	while (stack.length) {
		curr = stack.pop();
		let currChildLen = curr.children.length;
		for (let i = currChildLen - 1; i >= 0; i--) {
			stack.push(curr.children[i]);
		}
		result.push(curr.val);
	}

	return result;
};
