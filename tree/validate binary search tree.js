var isValidBST = function (root) {
	if (!root) return false;

	function dfs(node) {
		if (node.left) {
			if (node.left.val >= node.val) return false;
			dfs(node.left);
		}
		if (node.right) {
			if (node.right.val <= node.val) return false;
			dfs(node.right);
		}

		return true;
	}

	return dfs(root);
};
