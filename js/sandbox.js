// Change code below this line
function findMatches(array, ...args) {
	const matches = []; // Don't change this line
	for (const num of array) {
		if (args.includes(num)) {
			matches.push(num);
		}
	}
	// Change code above this line
	return matches;
}

console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
