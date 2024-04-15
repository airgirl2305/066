const arr = [10, 12, 15, 21];

// либо меняем на let - позволяет создать новую привязку при каждом вызове функции
for (var i = 0; i < arr.length; i++) {
  // из цикла идет в функцию из-за var функциональная область видимости
  // 4 - undefined 4 раза
  setTimeout(function () {
    // весь цикл закончился i на шаге 3 стало 4 дальше он не пошел
    console.log("Index: " + i + ", element " + arr[i]);
  }, 3000);
}
// https://habr.com/ru/companies/ruvds/articles/340194/

for (var i = 0; i < arr.length; i++) {
  // передадим функции переменную i, в результате
  // у каждой функции будет доступ к правильному значению индекса
  setTimeout(
    (function (i_local) {
      return function () {
        console.log("The index of this number is: " + i_local);
      };
    })(i),
    3000
  );
}
