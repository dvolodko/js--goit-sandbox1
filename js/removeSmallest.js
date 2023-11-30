function removeSmallest(numbers) {
	if (numbers.length === 0) {
		return [];
	}
	const toFindMinimal = Math.min(...numbers);
	const index = numbers.indexOf(toFindMinimal);
	const filteredArray = [...numbers];
	filteredArray.splice(index, 1);
	return filteredArray;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
