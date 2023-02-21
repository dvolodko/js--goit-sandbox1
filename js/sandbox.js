function towerBuilder(nFloors) {
	const tower = [];
	for (let i = 1; i <= nFloors; i++) {
		tower.push(floorBuilder(nFloors - i, i * 2 - 1));
	}
	return tower;
}

function floorBuilder(spaces, stars) {
	const floor = [];
	for (let m = 1; m <= spaces; m++) {
		floor.push(' ');
	}
	for (let m = 1; m <= stars; m++) {
		floor.push('*');
	}
	for (let m = 1; m <= spaces; m++) {
		floor.push(' ');
	}
	return floor.join('');
}

console.log(towerBuilder(2));
