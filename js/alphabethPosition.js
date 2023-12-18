function alphabetPosition(text) {
	const charArray = text.split('');
	const array = charArray
		.map(char => {
			if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
				return char.charCodeAt(0) - 64;
			} else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
				return char.charCodeAt(0) - 96;
			}
		})
		.filter(char => char !== undefined);
	return array.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
