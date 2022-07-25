var backspaceCompare = function (s, t) {
	const sSta = [];
	const tSta = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '#') sSta.pop();
		else {
			sSta.push(s[i]);
		}
	}

	for (let i = 0; i < t.length; i++) {
		if (t[i] === '#') tSta.pop();
		else tSta.push(t[i]);
	}

	if (sSta.join('') === tSta.join('')) return true;
	return false;
};

backspaceCompare('ab#c', 'ad#c');
