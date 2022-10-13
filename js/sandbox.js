const atTheOldToad = {
	potions: [
		{ name: 'Speed potion', price: 460 },
		{ name: 'Dragon breath', price: 780 },
		{ name: 'Stone skin', price: 520 },
	],
	// Change code below this line
	getPotions() {
		return this.potions;
	},
	addPotion(newPotion) {
		for (const potion of this.potions) {
			if (potion.name === newPotion.name) {
				return `Error! Potion ${newPotion.name} is already in your inventory!`;
			}
		}
		this.potions.push(newPotion);
	},
	removePotion(potionName) {
		let potionIndex = -1;
		for (const potion of this.potions) {
			potionIndex += 1;
			if (potion.name === potionName) {
				this.potions.splice(potionIndex, 1);
			}
		}
		return `Potion ${potionName} is not in inventory!`;
	},
	updatePotionName(oldName, newName) {
		let potionIndex = -1;
		for (const potion of this.potions) {
			potionIndex += 1;
			if (potion.name === oldName) {
				potion.name = newName;
			}
		}
		return `Potion ${oldName} is not in inventory!`;
	},
};
// Change code above this line

// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
console.log(atTheOldToad.potions);
