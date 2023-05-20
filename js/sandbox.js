// complete the function
function solution(string) {
	let array = [];
	const result = string.split('');
	result.map(letter => {
		if (/[A-Z]/.test(letter)) {
			array.push(' ' + letter);
		} else {
			array.push(letter);
		}
	});
	return array.join('');
}

console.log(solution('camelCasing'));
