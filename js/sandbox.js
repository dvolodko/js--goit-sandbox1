// 0. Створюємо пустий масив Тотал
// 1. Робимо промпт з числом
// 2. Додаємо в масив введенне число
// 3. Перевірка чи не було Кенсел або Ескейп
// 3а. Сумуємо масив і показуємо користувачу
// 3б. промпт "Наступне число?"
// 4.

// 5. При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.

const total = [];
let sum = 0;
let check = false;
do {
	const inputValue = prompt('Введіть число');
	total.push(Number(inputValue));
	check = true;
	if (!inputValue) {
		check = false;
	}
} while (check);
for (const number of total) {
	sum += number;
}
console.log(sum);
