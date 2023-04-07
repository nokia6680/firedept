"use strict";

var sortOpener = document.querySelector('.sort__title');
var sortList = document.querySelector('.sort__list');

sortOpener.onclick = function () {
  sortList.classList.toggle('is-active');
};