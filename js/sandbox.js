function isTriangle(a, b, c) {
	const sum = (...args) => args.reduce((a, b) => a + b);
	if (sum(a, b, c) / Math.max(a, b, c) > 2) {
		return true;
	} else {
		return false;
	}
}
