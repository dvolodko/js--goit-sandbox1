function persistence(num) {
	const digits = num.toString().split('');
	let realDigits = digits.map(Number);
	let n = 0;

	while (realDigits.length > 1) {
		realDigits = realDigits
			.reduce((prev, number) => {
				return prev * number;
			}, 1)
			.toString()
			.split('')
			.map(Number);
		n += 1;
	}
	return n;
}

persistence('39');
