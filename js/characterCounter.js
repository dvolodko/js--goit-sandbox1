function count(string) {
	const charAmountData = {};
	const charArray = string.split('');
	charArray.map(char => {
		if (charAmountData[char]) {
			charAmountData[char] += 1;
		} else {
			charAmountData[char] = 1;
		}
	});
	return charAmountData;
}

console.log(count('aba'));
