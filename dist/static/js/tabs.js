"use strict";

var tab = function tab() {
  var tabNav = document.querySelectorAll('.itemcard__nav-item'),
      // Выбираем элементы навигации табов
  tabContent = document.querySelectorAll('.itemcard__content-item'),
      // Выбираем самы табы
  tabName; // Переменная для имени таба
  // Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav

  tabNav.forEach(function (item) {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach(function (item) {
      // Удаляем активный класс у всех элементов навигации табов
      item.classList.remove('is-active');
    });
    this.classList.add('is-active'); // Добавляем активный укласс у элемента по которому кликнули

    tabName = this.getAttribute('data-tab-name'); // Получаем имя таба, который нам нужен

    selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
  }

  function selectTabContent(tab) {
    // Проходим по всем табам и проверяем есть ли у элемента класс, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
    tabContent.forEach(function (item) {
      var classList = item.classList;
      classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
    });
  }
};

tab();