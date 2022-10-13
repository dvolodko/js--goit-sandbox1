const atTheOldToad = {
	potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
	addPotion(potionName) {
		// Change code below this line
		this.potions.push(potionName);

		// Change code above this line
	},
};
atTheOldToad.addPotion('Invisibility');
console.log(atTheOldToad.potions);
