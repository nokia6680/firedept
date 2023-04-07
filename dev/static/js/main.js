const sandwichToggle = function () {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    let sandwichElements = document.querySelectorAll('.nav__toggle');
    // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
    sandwichElements.forEach((item) => {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        let targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        let navMenu = document.querySelector('.nav__wrap');
        let body = document.querySelector('.body');

        this.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
        body.classList.toggle('no-scroll');

        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
    }
};
sandwichToggle();


var searchInput = document.querySelector('.header__search-input');
var searchResult = document.querySelector('.header__search-result');
var searchReset = document.querySelector('.header__search-reset');

searchInput.oninput = function() {
    searchResult.classList.add('is-active');
    searchReset.classList.add('visible');
};

searchReset.onclick = function() {
    searchResult.classList.remove('is-active');
    searchReset.classList.remove('visible');
    searchInput.value = '';
}

var catOpener = document.getElementsByClassName('header__catalog');
var catBody = document.querySelector('.cat-popup');
var catCloser = document.querySelector('.cat-popup__closer');
var body = document.querySelector('.body');
for (var i = 0; i < catOpener.length; i++) {
    var elem = catOpener[i];

    elem.addEventListener("click", function() {
        catBody.classList.add('is-active');
        body.classList.add('no-scroll');
    });

    if (catCloser) {
        catCloser.addEventListener('click', function() {
            catBody.classList.remove('is-active');
            body.classList.remove('no-scroll');
        });
    };
};
// Внутренности каталожного фильтра
var catItem = document.getElementsByClassName('cat-popup__item');
var catItemBack = document.querySelector('.cat-popup__return');

for (var i = 0; i < catItem.length; i++) {
    var elem = catItem[i];

    elem.addEventListener("click", function() {
        catItemBack.classList.add('visible');
    });

    catItemBack.addEventListener("click", function() {
        catItemBack.classList.remove('visible');
        for (var j = 0; j < catItem.length; j++) {
            var openedItem = catItem[j];
            openedItem.removeAttribute("open");
        };
    });
};

// Fetch all the details elements
const details = document.querySelectorAll(".cat-popup__item");

// Add onclick listeners
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all details that are not targetDetail
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});

let filterOpener = document.querySelector('.open-filter');
let filterBody = document.querySelector('.filter');
let filterCloser = document.querySelector('.js-filter-closer');

if (filterOpener) {
    filterOpener.addEventListener('click', function() {
        filterBody.classList.add('is-active');
        body.classList.add('no-scroll');
    })
}

if (filterCloser) {
    filterCloser.addEventListener('click', function() {
        filterBody.classList.remove('is-active');
        body.classList.remove('no-scroll');
    })
}

var callOpener = document.getElementsByClassName('js-callback');
var callback = document.querySelector('.js-callback-popup');
var callCloser = document.querySelector('.popup-callback__closer');
var callForm = document.querySelector('.popup-callback__form');

var reaction = document.querySelector('.popup-reaction');
var reactionCloser = document.querySelector('.popup-reaction__closer');

for (var i = 0; i < callOpener.length; i++) {
    var elem = callOpener[i];

    elem.addEventListener("click", function() {
        callback.classList.add('is-active');
        body.classList.add('no-scroll');
    });
};

callForm.onsubmit = function() {
    callback.classList.remove('is-active');
    reaction.classList.add('is-active');
}

callCloser.onclick = function() {
    callback.classList.remove('is-active');
    body.classList.remove('no-scroll');
};

reactionCloser.onclick = function() {
    reaction.classList.remove('is-active');
    body.classList.remove('no-scroll');
}

var instantBuy = document.getElementsByClassName('js-instant-buy');
var instantPopup = document.querySelector('.popup-fast');
var instantCloser = document.querySelector('.popup-fast__closer');
var instantForm = document.querySelector('.popup-fast__form');

for (var i = 0; i < instantBuy.length; i++) {
    var elem = instantBuy[i];

    elem.addEventListener("click", function() {
        instantPopup.classList.add('is-active');
        body.classList.add('no-scroll');
    });
};

instantForm.onsubmit = function() {
    instantPopup.classList.remove('is-active');
    reaction.classList.add('is-active');
}

instantCloser.onclick = function() {
    instantPopup.classList.remove('is-active');
    body.classList.remove('no-scroll');
};

var claimOpener = document.getElementsByClassName('js-order');
var claimPopup = document.querySelector('.popup-claim');
var claimCloser = document.querySelector('.popup-claim__closer');
var claimForm = document.querySelector('.popup-claim__form');

for (var i = 0; i < claimOpener.length; i++) {
    var elem = claimOpener[i];

    elem.addEventListener("click", function() {
        claimPopup.classList.add('is-active');
        body.classList.add('no-scroll');
    });
};

claimForm.onsubmit = function() {
    claimPopup.classList.remove('is-active');
    reaction.classList.add('is-active');
}

claimCloser.onclick = function() {
    claimPopup.classList.remove('is-active');
    body.classList.remove('no-scroll');
};
