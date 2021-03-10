var $menu = $(".menu");
var $burger = $(".menu__burger");
var $body = $("body");
function getMenu() {
  $burger.on("click", toggleMenu);
  $menu.on("click", function (e) {
    if ($(e.target).closest(".menu__list").length) {
      return;
    } else {
      toggleMenu();
    }
  });
}
function toggleMenu() {
  $burger.toggleClass("active");
  $menu.toggleClass("active");
  $body.toggleClass("overflow");
}

$(document).ready(function () {
  var startSectionSlider = new Swiper(".start-section__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoHeight: true,
    breakpoints: {
      1200: {
        autoHeight: false,
      },
    },
  });
  var statisticSlider = new Swiper(".statistic__slider", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });

  var programSlider = new Swiper(".program__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var advantagesSlider = new Swiper(".advantages__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false,
  });
  var giftSlider = new Swiper(".gift__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoHeight: true,
  });
  var awardSlider = new Swiper(".awards__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });
  var registrationSlider = new Swiper(".registration__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var footerSlider = new Swiper(".footer__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchSlidesVisibility: true,
    spaceBetween: 10,
    slidesPerView: 2,
    observer: true,
    observeParents: true,
    rebuildOnUpdate: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 8,
      },
      1200: {
        slidesPerView: 8,
      },
      1400: {
        slidesPerView: 10,
      },
      1600: {
        slidesPerView: 12,
      },
    },
  });
  var sliders = [
    startSectionSlider,
    programSlider,
    advantagesSlider,
    giftSlider,
    registrationSlider,
  ];
  sliders.forEach((slider) => {
    slider.on("slideChange", function (evt) {
      var idx = evt.activeIndex;
      sliders.forEach((i) => i.slideTo(idx));
    });
  });

  getMenu();

  $(".marquee").marquee({
    duration: 15000,
    gap: 190,
    direction: "left",
    duplicated: true,
  });
  $(".tooltip-js").tooltipster();
  jQuery(".scrollbar-outer").scrollbar();
});
