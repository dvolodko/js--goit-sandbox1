function bouncingBall(h, bounce, window) {
	if (h <= 0) {
		return -1;
	}
	if (bounce <= 0 || bounce >= 1) {
		return -1;
	}
	if (window >= h) {
		return -1;
	}
	let ballBounceHeight = h * bounce;
	let ballsFlyingThrough = 1;

	while (ballBounceHeight > window) {
		ballsFlyingThrough += 2;
		ballBounceHeight = ballBounceHeight * bounce;
	}
	return ballsFlyingThrough;
}

console.log(bouncingBall(30.0, 0.66, 1.5));
