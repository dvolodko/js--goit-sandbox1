String.prototype.toJadenCase = function () {
	const arrayOfWords = this.split(' ');
	const newArray = [];
	arrayOfWords.map(word => {
		const newWord = word.replace(word[0], word[0].toUpperCase());
		newArray.push(newWord);
	});
	return newArray.join(' ');
};

const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
