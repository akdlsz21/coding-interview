var reverseList = function (head) {
	let curr = head;
	let temp = curr;
	let ne = head.next;
	curr.next = null;
	while (ne) {
		let third = ne.next;
		ne.next = curr;
		curr = ne;
		ne = third;
	}

	return temp;
};
