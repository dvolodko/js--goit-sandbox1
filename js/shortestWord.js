function findShort(s) {
	const wordsArray = s.split(' ');
	const sortedWordsArray = wordsArray.map(word => {
		return word.length;
	});
	return Math.min(...sortedWordsArray);
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
