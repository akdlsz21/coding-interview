var mergeTwoLists = function (list1, list2) {
	if (!list1 && list2) return list2;
	if (list1 && !list2) return list1;
	if (!list1 && !list2) {
		return new ListNode().next;
	}

	let temp = new ListNode(-1);
	let head = temp;

	while (list1 !== null && list2 !== null) {
		while (temp.next !== null) {
			temp = temp.next;
		}

		if (list1.val < list2.val) {
			let curr = list1;
			list1 = list1.next;
			curr.next = null;
			temp.next = curr;
		} else {
			let curr = list2;
			list2 = list2.next;
			curr.next = null;
			temp.next = curr;
		}
	}
	if (list1) {
		temp.next.next = list1;
	}

	if (list2) {
		temp.next.next = list2;
	}

	return head.next;
};
