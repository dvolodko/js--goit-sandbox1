function high(x) {
	let score = 0;
	let highestScoringWord = '';

	x.split(' ').map(word => {
		const scoreOfWord = word.split('').reduce((acc, char) => {
			return acc + char.charCodeAt(0) - 96;
		}, 0);
		if (scoreOfWord > score) {
			score = scoreOfWord;
			highestScoringWord = word;
		}
	});
	return highestScoringWord;
}

console.log(high('man i need a taxi up to ubud'));
