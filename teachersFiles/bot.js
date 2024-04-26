// ==UserScript==
// @name         My ya Bot
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  Bot for ya to serf on smashingmagazine.com
// @author       Askhabova Kheda
// @match        https://ya.ru/*
// @grant        none
// ==/UserScript==

let input = document.getElementById("text");
let button = document.getElementsByClassName("search3__button mini-suggest__button")[0];
//document.getElementsByClassName("search3__button")[0];
let links = document.links;
let keywords = [
  "Writing CSS In 2023",
  "How To Search For A Developer Job Abroad",
  "Learning JavaScript With Imagination",
  "Making Sense Of “Senseless” JavaScript Features",
];
let keyword = keywords[getRandom(keywords.length, 0)];

if (button !== undefined) {
  input.value = keyword;
  button.click();
} else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("smashingmagazine.com") != -1) {
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
