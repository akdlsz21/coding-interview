var detectCycle = function (head) {
	let slow = head;
	let fast = head;
	let poi = head;
	if (!head) return null;
	if (!head.next) return null;
	if (fast.next.next === fast) return slow;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) break;
	}

	if (fast !== slow) return null;

	while (true) {
		poi = poi.next;
		slow = slow.next;
		if (poi === slow) return slow;
	}
};
