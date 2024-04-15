"use strict"
var global = "Global variable";

// function hoistingtest() {
//   console.log(message); // ошибка не запустится
//   let message = "Hello, ";
//   console.log(message + "World!!");
// }
// hoistingtest();

//без объявления
let x = 1;

function test1() {
  y = 2; // глобальная
}
function test2() {
  z = 3;
}
function test3() {
  console.log(x);
  console.log(y);
  console.log(z);
}
test3();


let name = "Vasya";

function Hi() {
  name = "Kolya"; // тоже глобальная - перезапишет
}

function Hi() {
  let name = "Vanya"; // отработает блочную
}

  for (var i = 0; i < arr.length; i++) { // 4 - undefined
        setTimeout(function() {
          console.log("Index: " + i + ", element " + arr[i]);
        }, 3000)
      }
