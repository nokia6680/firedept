"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var swiper = new Swiper('.swiper-service-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  cssMode: true,
  watchSlidesProgress: true,
  // If we need pagination
  pagination: {
    el: '.service__pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.service__next',
    prevEl: '.service__prev'
  },
  breakpoints: {
    320: {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    768: {
      centeredSlides: false,
      spaceBetween: 30
    },
    1366: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 30,
      draggable: false,
      cssMode: false
    }
  }
});
var swiper2 = new Swiper('.swiper-offers-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  cssMode: true,
  watchSlidesProgress: true,
  // If we need pagination
  pagination: {
    el: '.offers__pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.offers__next',
    prevEl: '.offers__prev'
  },
  breakpoints: {
    320: {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    768: {
      centeredSlides: false,
      spaceBetween: 30
    },
    1366: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
var swiper3 = new Swiper('.swiper-latest-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  cssMode: true,
  watchSlidesProgress: true,
  // If we need pagination
  pagination: {
    el: '.latest__pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.latest__next',
    prevEl: '.latest__prev'
  },
  breakpoints: {
    320: {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    768: {
      centeredSlides: false,
      spaceBetween: 30
    },
    1366: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 30,
      draggable: false,
      cssMode: false
    }
  }
});
var swiper4 = new Swiper('.swiper-sales-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  cssMode: true,
  watchSlidesProgress: true,
  // If we need pagination
  pagination: {
    el: '.sales__pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.sales__next',
    prevEl: '.sales__prev'
  },
  breakpoints: {
    320: {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    768: {
      centeredSlides: false,
      spaceBetween: 30
    },
    1366: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 30,
      draggable: false,
      cssMode: false
    }
  }
});
var swiper5 = new Swiper('.swiper-review-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  watchSlidesProgress: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev'
  }
});
$(function () {
  var _, _2;

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
      768: (_ = {
        direction: "vertical",
        slidesPerView: 3,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true
      }, _defineProperty(_, "freeMode", false), _defineProperty(_, "navigation", {
        nextEl: '.thumbs-controls__next',
        prevEl: '.thumbs-controls__prev'
      }), _),
      1366: (_2 = {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true
      }, _defineProperty(_2, "freeMode", false), _defineProperty(_2, "navigation", {
        nextEl: '.thumbs-controls__next',
        prevEl: '.thumbs-controls__prev'
      }), _2)
    }
  });
  var galleryTop = new Swiper(".gallery-top", {
    breakpoints: {
      320: {
        direction: "horizontal",
        watchOverflow: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".gallery-pagination"
        },
        keyboard: {
          enabled: true
        }
      },
      768: {
        direction: "horizontal",
        spaceBetween: 10,
        keyboard: {
          enabled: true
        },
        thumbs: {
          swiper: galleryThumbs
        }
      }
    }
  });
  galleryTop.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryTop.activeIndex);
  });
  galleryThumbs.on("transitionStart", function () {
    galleryTop.slideTo(galleryThumbs.activeIndex);
  });
}); // swiper6.on('slideChangeTransitionStart', function() {
//     swiperThumbs.slideTo(swiper6.activeIndex);
// });
// swiperThumbs.on('transitionStart', function() {
//     swiper6.slideTo(swiperThumbs.activeIndex);
// });