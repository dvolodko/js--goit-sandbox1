function duplicateCount(text) {
	const arrayOfChars = [...text];
	const duplicatesChars = [];
	arrayOfChars.map((element, index, array) => {
		const isUnique = array.indexOf(element.toLowerCase()) === index;
		if (!isUnique) {
			duplicatesChars.push(element.toLowerCase());
		}
	});
	const duplicateCharsFiltered = duplicatesChars.filter((element, index, array) => array.indexOf(element) === index);
	return duplicateCharsFiltered.length;
}
