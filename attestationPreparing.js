/*1. //TODO Программа хранит в двух переменных курс доллара и евро.
В первой переменной у вас хранится стоимость одного евро в рублях,
во второй - стоимость одного доллара в рублях. Вы спрашиваете у пользователя,
сколько рублей он хочет сконвертировать, получаете это число и считаете.
Результат надо вывести на страницу с помощью alert.*/
/*function getExchangeRate(rubles) {

    let euroRubleExchangeRate = 1;
    let dollarRubleExchangeRate = 2; 

return alert(`евро ${rubles/euroRubleExchangeRate} и долларов ${rubles/dollarRubleExchangeRate}`);
};

getExchangeRate(100);*/

/*2. //FIXME Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h.
Программа выводит сообщение: «Площадь трапеции будет равна <значение>».
Площадь вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.*/
// function trapezoidS(a, b, h) {
//   return console.log(`Площадь трапеции будет равна ${((a + b) / 2) * h}`);
// }
// trapezoidS(1, 2, 3);

/*3. //FIXME Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
Отобразить размер вклада поочередно на ближайшие 5 лет.*/

/* let depositSum = 1000;
let annualInterestRate = 10;
console.log('Задание 3:');
for (i = 1; i <= 5; i++) {
    console.log(`Год ${i}: ${Math.round(depositSum += depositSum * annualInterestRate / 100)}`);
}; */

/*4. //TODO Запросить у пользователя ввод числа и сохранить это число в переменную a.
Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.*/

/*5. //DONE Выведите столбец чисел от 1 до 50.*/
/* let i = 0;
do {
  i++;
  console.log("Задание 5 =", i);
} while (i < 50); */

/*6. //DONE Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.*/
/* let a6 = 10;
let b6 = 3;
console.log('Задание 6 =', a6 % b6); */

/*7. //DONE С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.*/
/* let str7 = '';

for (i = 1; i <= 9; i++) {
  str7 += i;
};

console.log('Задание 7 =', str7); */

/*8. //DONE Создайте переменную str и присвойте ей значение 'abcde'.
Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.*/
/* let str8 = 'abcde';
 console.log('Занятие 8:', str8[0], str8[1], str8[4]); */

/*9. //DONE Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.*/
/* let array9 = ['Привет, ', 'мир', '!'];
let string9 = '';

array9.forEach(element => {string9 += element});
console.log('Задание 9 =', string9); */

/*10. //DONE Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.*/
//console.log('Задание 10 =', [1, 2, 3].concat([4, 5, 6]));

/*11. //TODO Напишите фрагмент кода (группу команд), который будет присваивать значения 5 и 9
двум переменным, а затем третья переменная будет получать значение, равное сумме значений
первых двух переменных. Вывести на экран значение третьей переменной.*/

/*12. //TODO	Напишите фрагмент кода который будет присваивать значение 7.5 переменной х,
а затем переменным a и b будет присваивать значения вдвое и втрое (соответственно)
большие значения переменной х. Вывести эти значения на экран.*/

/*13. //TODO	Напишите фрагмент кода, в котором переменным а и b будут присваиваться числовые значения
пользователем, с помощью команды (prompt()). Далее необходимо проверить, что число попадает в диапазон
"однозначное положительное число". Затем следует присвоить переменной с значение, составленное следующим
образом: значение переменной а является числом десятков, значение переменной b является числом единиц.
Например, если переменной а присваивается значение 4, а переменной b – значение 7, то переменная с
получает значение 47. Вывести результат на экран.*/

/*14. //TODO	Напишите фрагмент кода, который присваивает переменной х значение типа Number,
а затем присваивает переменной треть от значения переменной х. Выводить результат на экран.*/

/*15. //TODO Напишите фрагмент кода, который присваивает переменной х значение 9,
а затем выводит на экран: в первой строке – это значение с поясняющей надписью
(например, «значение х равно 9»), а во второй – квадрат этого значения (тоже с поясняющей надписью).*/

/*16. //TODO Напишите фрагмент кода, который принимает от пользователя число и выводит на экран
число, которое больше введенного с клавиатуры на 10.*/

/*17. //TODO Напишите фрагмент кода, который принимает от пользователя число и если число четное то программа
выводит на экран число,
которое больше введенного с клавиатуры на 10, в противном случае выводит на экран число в 10 раз больше введенного.*/

/*18. //TODO	Напишите фрагмент кода, который принимает от пользователя число и выводит на экран новое число,
которое больше введенного с клавиатуры в 10 раз.*/

/*19. //TODO Напишите код, который принимает от пользователя число и затем выводит
на экран следующие три значения (все – в одной строке, разделенные пробелом):
число, меньше введенного с клавиатуры на 1, число, введенное с клавиатуры,
и число, больше введенного с клавиатуры на 1.*/

/*20. //DONE	Напишите код, который принимает от пользователя число, представляющее собой массу тела в граммах,
 и выводящую на экран массу этого тела в килограммах.*/
/* function getWeightInKg(weightInGr) {
  return weightInGr / 1000;
};

console.log("Задание 20 = ", getWeightInKg(1500)); */

/*21. //TODO Напишите код, который принимает от пользователя число, представляющее собой промежуток
времени в часах, и выводит на экран этот же промежуток времени, но выраженный в секундах.*/

/*22. //TODO Напишите программу, которая принимает с клавиатуры два числа, образующих ответ на вопрос «который час?»
(первое – часы, второе минуты, например, 15 и 42) и выводит на экран следующие значения
(каждое – в отдельной строке): сколько секунд прошло с полуночи да «данного момента» и сколько минут
прошло за это же время, а также сколько минут осталось до полуночи.*/

/*23. //TODO Кинетическая энергия тела подсчитывается как половина произведения массы тела
на квадрат скорости тела. Напишите программу, которая принимает с клавиатуры два числа,
первое из которых – масса тела, а второе – его скорость. Программа должна подсчитать и вывести на экран
значение кинетической энергии тела.*/

/*24. //TODO Напишите код, который сначала заносит в переменную строковое значение Привет,
а затем принимает с клавиатуры ваше имя. Программа должна вывести на экран в одной
строке сообщение, составленное из строкового значения Привет, знака "запятая" и вашего имени.*/

/*25. //FIXME Напишите код, который принимает от пользователя фамилию, имя и отчество, а затем
выводит на экран фамилию и инициалы (без пробела между инициалами).*/
/* function signature(surname, name, middle) {
    return console.log('Задание 25 = ', surname + ' ' + name[0] + '.' + middle[0] + '.')
};
signature('Асхабова', 'Хеда', 'Виситовна'); */

/*26. //TODO Напишите код, который принимает с клавиатуры целое положительное двузначное число
и выводит на экран его цифры, разделенные знаком «пробел».*/

/*27. //TODO Напишите код, который принимает с клавиатуры целое положительное трехзначное число
и выводит на экран его цифры, разделенные знаком «пробел».*/

/*28. //TODO Напишите код, который принимает с клавиатуры целое положительное двузначное число и выводит
на экран его цифры, разделенные знаком «пробел» – но в обратном порядке.
о есть для числа 45 будет выведено на экран 5 4.*/

/*29. //TODO Напишите код, который принимает с клавиатуры целое положительное двузначное число и выводит
его на экран в «полном виде»: например, для числа 34 это будет выглядеть как 30 4.*/

/*30. //TODO Напишите код, который принимает с клавиатуры целое положительное трехзначное число
и выводит его на экран в «полном виде»: например, для числа 364 это будет выглядеть как 300 60 4.*/

/*31. //TODO Напишите код, который принимает от пользователя целое положительное двузначное число.
Затем следует построить новое значение,составленное из цифр числа, введенного с клавиатуры,
но в обратном порядке. После этого новое значение следует увеличить на 8 и окончательный результат
вывести на экран. То есть для числа 37 следует построить число 73 и вывести на экран 81.*/

/*32. //TODO Назовем «весом числа» сумму его цифр. Напишите код, который принимает от пользователя число
и выводит на экран его «вес».*/

/*33. //DONE Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.*/
/* let string33 = "ёжик";
string33[0].toUpperCase();
console.log("Задание 33 = ", string33[0].toUpperCase() + string33.slice(1)); */

/*34. //TODO Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да',
а если нет - выведите 'нет'.*/

/*35. //DONE Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true,
а если не равны - false.*/
/* function isEqual(digit1, digit2) {
  if (digit1 == digit2) {
    return true;
  } else {
    return false;
  }
};
console.log("Задание 35 = ", isEqual(1, 1)); */

/*36. //TODO Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.*/

/*37. //TODO Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа.
Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число
и возвращать true, если число положительное, и false - если отрицательное.*/

/*38. //TODO Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.*/

/*39. //DONE Выведите с помощью цикла столбец чисел от 1 до 100.*/
/* for (let i = 1; i <= 100; i++) {
  console.log("Задание 39 =", i);
} */

/*40. //TODO Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку с помощью alert выводился ее src.*/

/*41. //TODO Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо записать в переменную text фразу
'Привет, мир!', а затем вывести на экран содержимое этой переменной.*/

/*42. //TODO В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число
(в первую, вторую, третью или четвертую).*/

/*43. //TODO Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.*/

/*44. //TODO Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится'
и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.*/

/*45. //TODO Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).*/

/*46. //TODO Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.*/

/*47. //DONE Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл*/
//console.log("Задание 47 =", "123456".split('').reverse().join(''));

/*49. //TODO Дано число, например 31. Проверьте, что это число не делится ни на одно другое число
кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится
на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.*/

/*50. //TODO Сделайте функцию, которая параметрами принимает 2 числа.
Если их сумма больше 10 - пусть функция вернет true, а если нет - false.*/

/*51. //TODO Заполните массив с помощью цикла следующим образом: в первый элемент запишите '1',
во второй '22', в третий '333' и так далее.*/

/*52. //TODO Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.*/

/*53. //TODO Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.*/

/*54. //TODO Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
И так, пока сумма не станет однозначным числом (9 и менее).*/

/*55. //TODO Выведите с помощью цикла столбец чисел от 100 до 1.*/

/*56. //TODO Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово
'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').*/

/*57. //TODO Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru',
то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском.
Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.*/

/*58. //TODO Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.*/

/*59. //DONE Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.*/
/* let array59_1 = [1, 2, 3];
let array59_2 = [4, 5, 6];

let result59_1 = array59_1.concat(array59_2);
let result59_2 = [...array59_1, ...array59_2];

console.log('Задание 59: ', result59_1, result59_2); */

/*60. //TODO Получите url-адрес текущей страницы и проверьте, что строка начинается на http://.*/

/*61. //TODO Сделайте функцию, которая возвращает сумму двух чисел.*/

/*62. //TODO Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
Если есть - выведите 'да', а если нет - выведите 'нет'.*/

/*63. //TODO Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
Если отрицательное - пусть функция вернет true, а если нет - false.*/

/*64. //TODO С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.*/

/*65. //DONE Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.*/
/* let array65 = [];

function arrayFill(toAdd) {
  return array65.push(toAdd);
}
arrayFill('PRO');

console.log('Задание 65: ', array65); */

/*66. //TODO Первым параметром функция принимает значение, которым заполнять массив,
а вторым - сколько элементов должно быть в массиве.
Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].*/

/*67. //TODO Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.*/

/*68. //TODO Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
Функция должна возвращать true или false.*/

/*69. //DONE Дана строка 'js'. Сделайте из нее строку 'JS'.*/
//console.log("Задание 69: ", "js".toUpperCase());

/*70. //DONE Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].*/

//console.log("Задание 70: ", [1, 2, 3].reverse());

/*71. //TODO Получите url-адрес текущей страницы и проверьте, что строка заканчивается на .php.*/

/*72. //DONE Сделайте функцию, которая отнимает от первого числа второе и делит на третье.*/

/* function doCalc(number1, number2, number3){
    return (number1 - number2) / number3
};
console.log('Задание 72: ', doCalc(3, 1, 2)); */

/*73. //TODO Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
чтобы в сумме получилось больше 10-ти.*/

/*74. //TODO Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает
целое число и возвращает сумму его цифр.*/

/*75. //TODO Дана кнопка. По нажатии на эту кнопку выведите высоту окна браузера.*/

/*76. //TODO Составьте SQL запрос который получит все данные из таблицы tasks.*/

/*77. //TODO В таблице users имеется пользователь с id=546, напишите SQL запрос,
который позволит получить все данные пользователя с таким id. 77. 
В таблице users имеются поля Фамилия, Имя, Отчество, Возраст, Номер телефона.
Напишите SQL запрос который будет искать в таблице Иванова Игоря Петровича и возвращать все поля данной записи.*/

/*78. //DONE Даны переменные $a = 15 и $b = 6. Найдите остаток от деления a на b.*/
/* let a = 15;
let b = 6;

console.log("Задание 78: ", a % b); */

/*79. //TODO	_
        а)	Создай массив чисел.
        б)	Добавь в массив 10 чисел с клавиатуры.
        в)	Вывести на экран длину самой длинной последовательности повторяющихся чисел в списке.
        Пример для списка <i>2, 4, 4, 4, 8, 8, 4, 12, 12, 14</i>: 3*/

/*80. //DONE _84
    а)	Напиши функцию, которая принимает 2 параметра и возвращает сумму этих чисел.
    б)	Вызовите функцию передав на вход два любых числа.
    в)	Выведите на экран результат работы функции.*/

/*81. //TODO Напиши функцию, которая принимает в качестве параметра число, и возвращает квадрат этого числа.*/

/*82. //DONE Напиши программу, которая выводит на экран надпись: "Хочешь - решай задачи, не хочешь - решай нехотя"
17 раз каждый раз с новой строки, строки должны быть пронумерованы.*/
/* function string17timesRepeater() {
    for (i = 0; i <= 17; i++) {
    console.log('Задание 82: ', `${i} Хочешь - решай задачи, не хочешь - решай нехотя`)
    }
};

string17timesRepeater(); */

/*83. //TODO Создать ассоциативный массив и занести в него десять элементов по принципу:
"фамилия" - "дата рождения". Удалить из массива всех людей, родившихся летом.
Формат записи числа 18 april 1956. Вывести массив до удаления и после на экран, каждый с новой строки.
Пример записи в массиве: $arr['Иванов'=&gt;'18 april 1956'];*/

/* 84. //DONE 80_
     а)	Напиши функцию, которая принимает 2 параметра и возвращает сумму этих чисел.
     б)	Вызовите функцию, передав на вход два любых числа.
     в)	Выведите на экран результат работы функции.
*/

/* function get2DigitsSum(paramenter1, paramenter2) {
  return paramenter1 + paramenter2;
};

console.log('Задание 84: ', get2DigitsSum(11, 2)); */

