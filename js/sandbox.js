function filterArray(numbers, value) {
	// Change code below this line
	let moreThan = [];
	for (i = 0; i < numbers.length; i += 1) {
		if (numbers[i] > value) {
			moreThan = moreThan.push(numbers[i]);
		}
	}
	return moreThan;

	// Change code above this line
}

filterArray([1, 2, 3, 4, 5], 3);
