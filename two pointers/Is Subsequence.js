var isSubsequence = function (s, t) {
	if (!s.length && !t.length) return true;
	if (!s.length && t.length) return true;
	let idx = 0;

	for (let i = 0; i < t.length; i++) {
		let sChar = s[idx];
		let tChar = t[i];

		if (sChar === tChar) {
			idx++;
		}
		if (idx === s.length) return true;
	}

	return false;
};

isSubsequence('abc', 'ahbgdc');
