var decodeString = function (s) {
	const stack = [];
	for (const char of s) {
		if (char !== ']') {
			stack.push(char);
			continue;
		}
		let cur = stack.pop();
		let str = '';
		while (cur !== '[') {
			str = cur + str;
			cur = stack.pop();
		}
		let num = '';
		cur = stack.pop();
		while (!Number.isNaN(Number(cur))) {
			num = cur + num;
			cur = stack.pop();
		}
		stack.push(cur);
		stack.push(str.repeat(Number(num)));
	}
	return stack.join('');
};

var decodeString = function (s) {
	const multiply = [];
	let tempMult = '';
	let repeatStr = [];
	let solution = '';

	for (let char of s) {
		if (!isNaN(char)) {
			tempMult += char;
		} else if (char === '[') {
			multiply.push(tempMult);
			tempMult = '';

			repeatStr.push(solution);
			solution = '';
		} else if (char === ']') {
			solution = repeatStr.pop() + solution.repeat(multiply.pop());
		} else {
			solution += char;
		}
	}

	return solution;
};

decodeString('10[a2[c]]'); //?
