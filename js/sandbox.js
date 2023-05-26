function duplicateEncode(word) {
	const array = word.split('');
	const newArray = [];
	const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
	array.map(symbol => {
		if (duplicates.includes(symbol)) {
			newArray.push(')');
		} else {
			newArray.push('(');
		}
	});
	return newArray.join('');
}

console.log(duplicateEncode('recede'));
