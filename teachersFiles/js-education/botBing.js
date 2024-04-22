let bingInput = document.getElementsByName("q")[0];
let bingBtn = document.getElementsByClassName("search")[0];
let links = document.links;
let keywords = [
  "Базовые вещи про GIT",
  "10 самых популярных шрифтов от Google",
  "Отключение редакций и ревизий в WordPress",
];
let keyword = keywords[getRandom(keywords.length, 0)];

if (bingBtn !== undefined) {
  bingInput.value = keyword;
  bingBtn.click();
} else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") != -1) {
      let link = links[i];
      console.log("Нашёл строку " + link);
      link.click();
      break;
    }
  }
}

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
