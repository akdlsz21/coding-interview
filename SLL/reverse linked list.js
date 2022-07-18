var reverseList = function (head) {
	const temp = new ListNode(-1);
	if (!head) return null;

	let prev = null;
	let curr = head;
	let nex = head.next;
	temp.next = curr;
	while (nex) {
		curr.next = prev;
		prev = curr;
		curr = nex;
		nex = nex.next;
	}
	curr.next = prev;

	return curr;
};
