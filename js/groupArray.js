function solution(list) {
	const newArray = [];
	const tempArray = [list[0]];
	for (let i = 1; i < list.length; i++) {
		const element = list[i];
		const prevElement = list[i - 1];
		if (element - prevElement === 1) {
			tempArray.push(element);
			console.log(`if iteration ${i}, element: ${element}`);
		} else if (tempArray.length > 2) {
			const lastIndex = tempArray.length - 1;
			newArray.push(`${tempArray[0]}-${tempArray[lastIndex]}`);
			tempArray.length = 0;
			tempArray.push(element);
			console.log(`else if iteration ${i}, element: ${element}`);
		} else {
			newArray.push(...tempArray);
			tempArray.length = 0;
			tempArray.push(element);
			console.log(`else iteration ${i}, element: ${element}`);
		}
	}
	if (newArray.length === 0) {
		const lastIndex = tempArray.length - 1;
		newArray.push(`${tempArray[0]}-${tempArray[lastIndex]}`);
	}
	if (tempArray.length < 3) {
		newArray.push(...tempArray);
	} else if (tempArray.length !== 0) {
		const lastIndex = tempArray.length - 1;
		newArray.push(`${tempArray[0]}-${tempArray[lastIndex]}`);
	}

	return newArray.join(',');
}

const array = [-3, -2, -1, 0, 1, 3];
const array1 = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
console.log(solution(array1));
