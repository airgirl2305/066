// // Задание 1: Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас хранится стоимость
// // одного евро в рублях, во второй - стоимость одного доллара в рублях. Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это число и считаете (не забываем про дробную часть в корректном отображении). Результат надо вывести на страницу с помощью alert.
//
// function getEx() {
//   let rubles = +prompt("Сколько у Вас рублей для обмена?");
//   return alert(
//     `Вы можете их обменять на ${Math.round(rubles / 100.13)} евро или ${Math.round(
//       rubles / 92.48
//     )} долларов.`
//   );
// }
//
// getEx();
//
// function trapezoidS() {
//   let a = +prompt("Основание трапеции a = ");
//   let b = +prompt("Основание трапеции b = ");
//   let h = +prompt("Высота трапеции b = ");
//
//   return console.log(`Площадь трапеции будет равна ${((a + b) / 2) * h}`);
// }
// trapezoidS();
//
// let name = prompt("Как Вас зовут?");
//
// console.log(hi + " ," + name);

// Задание: Напишите программу, которая принимает с клавиатуры два числа, образующих ответ на вопрос «который час?»
// (первое – часы, второе минуты, например, 15 и 42) и выводит на экран следующие значения (каждое – в отдельной
// строке): сколько секунд прошло с полуночи до «данного момента» и сколько минут прошло за это же время, а также
// сколько минут осталось до полуночи.

// let hours = +prompt("Который час?");
// let minutes = +prompt("Сколько сейчас минут часа?");
//
// console.log(`${hours * 3600 + minutes * 60} секунд прошло с полуночи`);
// console.log(`${hours * 60 + minutes} минут прошло с полуночи`);
// console.log(`${(12 - hours) * 60 + 60 - minutes} минут осталось до полуночи`);

// Задание 9: Дан массив с числами.
// 	Проверьте, есть ли в нем два одинаковых числа подряд.Если есть - выведите 'да', а если нет - выведите 'нет'.Вывод не должен дублироваться в случае если пары одинаковых чисел встречаются несколько раз.

// Задание 17 : Создать массив, занести в него десять элементов по принципу: "фамилия" - "дата рождения". Удалить из массива всех людей, родившихся летом. Формат записи даты 18 april 1956. Вывести массив до удаления и после удаления в консоль, каждый с новой строки. Пример записи исходных данных:

// let people = [
// 	{
// 		name: "Ivanov",
// 		date: "01 april 1956",
// 	},
// 	{
// 		name: "Petrov",
// 		date: "02 may 1998",
// 	},
// 	{
// 		name: "Kozlova",
// 		date: "03 november 1978",
// 	},
// 	{
// 		name: "Kuznetsov",
// 		date: "04 july 1955",
// 	},
// 	{
// 		name: "Lagoda",
// 		date: "05 august 2000",
// 	},
// 	{
// 		name: "Smirnov",
// 		date: "06 september 2003",
// 	},
// 	{
// 		name: "Lapteva",
// 		date: "07 october 1994",
// 	},
// 	{
// 		name: "Krasnova",
// 		date: "08 feburary 1967",
// 	},
// 	{
// 		name: "Makarova",
// 		date: "09 may 1998",
// 	},
// 	{
// 		name: "Ptentsov",
// 		date: "10 january 1989",
// 	},
// ];

//Задание 7: Даны переменные a и b (вводит пользователь). Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// let a = +prompt("a =");
// let b = +prompt("b =");

// console.log(a % b ? "Делится с остатком" : "Делится");

//Задание 8: Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
let array = [0, 1, 11, 14, 2, 26, 3];
let newArray = [];
for (let i = 0; i < array.length; i++) {
	
	if (array[i]) {
		if (array[i] < 10) {
			newArray = [].push(array[i]);
		} else {
		}
	}
	console.log(newArray);
}

