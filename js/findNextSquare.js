function findNextSquare(sq) {
	const squared = Math.sqrt(sq);
	const isPerfectSquare = Number.isInteger(squared);
	if (isPerfectSquare) {
		const nextPerfectSquare = (squared + 1) ** 2;
		return nextPerfectSquare;
	}
	return -1;
}

console.log(findNextSquare(121));
