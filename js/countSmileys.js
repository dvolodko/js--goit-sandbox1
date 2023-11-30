function countSmileys(arr) {
	let smileWithEyes = '';
	let smileWithNose = '';
	let counter = 0;
	arr.map(smile => {
		if (smile.includes(':') || smile.includes(';')) {
			smileWithEyes = smile;
		} else {
			return;
		}
		if (smileWithEyes.includes('D') || smileWithEyes.includes(')')) {
			if (smileWithEyes.length === 2) {
				counter += 1;
				return;
			} else if (smileWithEyes.length === 3) {
				smileWithNose = smileWithEyes;
			} else {
				return;
			}
		} else {
			return;
		}
		if (smileWithNose.includes('-') || smileWithNose.includes('~')) {
			console.log(smileWithNose);
			counter += 1;
		}
	});
	return counter;
}

console.log(countSmileys([';~)', ':)', ':-)', ':--)']));
