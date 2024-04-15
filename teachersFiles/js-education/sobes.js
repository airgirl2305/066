



for (var i = 0; i < arr.length; i++) {
  // 4 - undefined
  setTimeout(function () {
    console.log("Index: " + i + ", element " + arr[i]);
  }, 3000);
}
// https://habr.com/ru/companies/ruvds/articles/340194/
