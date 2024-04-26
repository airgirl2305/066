// ==UserScript==
// @name         Mega one
// @namespace    http://tampermonkey.net/
// @version      1.1.2
// @description  try to take over the world!
// @author       Askhabova Kheda
// @match        https://swisscows.com/*
// @match        https://ya.ru/*
// @match        https://www.nigma.net.ru/*
// @match        https://www.google.com/*
// @match        https://www.phind.com/*
// @match        https://you.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
})();

let input;
let button;
let links = document.links;
let keywords = [
  "Writing CSS In 2023",
  "How To Search For A Developer Job Abroad",
  "Learning JavaScript With Imagination",
];

let keyword = keywords[getRandom(keywords.length, 0)];



if ((location.href = "https://nigma")) {
  input = document.getElementById("query");
  button = document.querySelector('[value="Найти!"]');
}
if ((location.href = "https://www.bing.com/")) {
  input = document.getElementsByName("q")[0];
  button = document.getElementsByClassName("search")[0];
}
if ((location.href = "https://swisscows.com/")) {
  input = document.querySelector('[type="search"]');
  button = document.getElementsByClassName("search-submit")[0];
}
if ((location.href = "https://www.phind.com/")) {
  input = document.querySelector('[placeholder="Ask anything. What are you stuck on?"]');
  button = document.getElementsByClassName("fe-arrow-right")[0];
}

if ((location.href = "https://www.you.com/")) {
  input = document.getElementById("search-input-textarea");
  button = document.querySelector('[data-eventactionname="click_send"]');
}
if ((location.href = "https://www.ya.ru/")) {
  //input =;
  //button = ;
}

if (cowsBtn !== undefined) {
  cowsInput.value = keyword;
  cowsBtn.click();
  if (cowsBtn.click()) console.log("клик");
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
let links = document.links;
let site = "smashingmagazine.com";
let searchEngine = "https://ya.ru/"
let keywords = [
  "CSS 2023", // page 2 - "Writing CSS In 2023",
  "developer job abroad", // page 2 - "How To Search For A Developer Job Abroad",
  "Learning JavaScript With Imagination",
  "Making Sense Of “Senseless” JavaScript Features",
];
let keyword = keywords[getRandom(0, keywords.length)];


//MouseEvent("click");// new user event - our bot ears

//MouseEvent("click");// new user event - our bot ears

// working on the search engine main page
if (button !== undefined) { // search button is only in the main page
  let i = 0;
  //  input.focus();
  //  input.dispatchEvent(mouseClick);
  //  input.value = keyword;
  //  button.click();

  let timerId = setInterval(() => {
    input.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      button.click();
    }
  }, 150);

  // working on the target page
} else if (location.hostname == site) {
  setInterval(() => {
    let linkIndex = getRandom(0, links.length);
    let localLink = links[linkIndex];

    if (getRandom(0, 101) > 50) {
      location.href = searchEngine;
    }
    if (links.length == 0) {
      location.href = site;
    }
    if (localLink.href.includes(site)) {
      localLink.click();
    }
  }, getRandom(5000, 7000));
  console.log("We are on the target page");
}

//working on a search results page
else if (document.querySelector(".Pager-Content") !== null) { // search results page has pages in it
  let nextPage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf(site) !== -1) {
      let link = links[i];
      let nextPage = false;
      console.log("I've found one " + link);
      setTimeout(() => {
        link.target = "_self";
        link.click();
      }, getRandom(2000, 3000));
      break;
    }
  }
  let pagesExist = setInterval(() => {
    let page = document.querySelectorAll(".Pager-Item_current")[0];
    if (page !== null) {
      if (page.innerText == "5") {
        let nextPage = false;
        location.href = searchEngine;
      }
      clearInterval(pagesExist);
    }
  }, 100);

  if (nextPage) {
    setTimeout(() => {
      document.getElementsByClassName("Pager-Item_type_next")[0].click();
    }, getRandom(2500, 3500));
  }
}

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
