"use strict";

var counter = function counter() {
  var btns = document.querySelectorAll('.itemcard__counter-btn');
  btns.forEach(function (item) {
    item.addEventListener('click', counterState);
  });

  function counterState() {
    var dir = this.dataset.direction,
        inputEl = this.parentElement.previousElementSibling,
        currentValue = inputEl.value;
    dir === 'plus' ? counterPlus(inputEl, currentValue) : counterMinus(inputEl, currentValue);
  }

  var counterPlus = function counterPlus(el, val) {
    el.value = +val + 1;
  };

  var counterMinus = function counterMinus(el, val) {
    if (val - 1) el.value = +val - 1;
  };
};

counter();