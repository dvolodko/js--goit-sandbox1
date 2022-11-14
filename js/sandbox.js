//Напиши функцию конструктор User для создания пользователя со следующими свойствами
//a. userName - имя, строка
//b. age - возраст, число
//c. numbersOfPost - количество постов, число
//d. класс ожидает 1 параметр - объект настроек с одноименными свойствами

//Добавь метод getInfo(), который возвращает строку:
//`Пользователю ${} ${} лет и у него ${} публикаций.`

const User = function (userObj) {
	const { userName, age, numberOfPost } = userObj;
	this.userName = userName;
	this.age = age;
	this.numberOfPost = numberOfPost;
	// this.getInfo = function () {
	// 	console.log(`Користувачу ${userName} ${age} років і він має ${numberOfPost} постів.`);
	// };
};

User.prototype.getInfo = function () {
	console.log(`Користувачу ${this.userName} ${this.age} років і він має ${this.numberOfPost} постів.`);
};

const poly = new User({
	userName: 'Poly',
	age: 33,
	numberOfPost: 567,
});

console.log(poly);
poly.getInfo();
