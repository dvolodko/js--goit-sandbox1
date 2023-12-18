function add(A, B) {
	const AL = A.length;
	const BL = B.length;
	const ML = Math.max(AL, BL);

	let carry = 0,
		sum = '';

	for (let i = 1; i <= ML; i++) {
		let a = +A.charAt(AL - i);
		let b = +B.charAt(BL - i);

		let t = carry + a + b;
		carry = (t / 10) | 0;
		t %= 10;

		sum = i === ML && carry ? carry * 10 + t + sum : t + sum;
	}

	return sum;
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
