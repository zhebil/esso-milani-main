var $menu = $(".menu");
var $burger = $(".menu__burger");
var $body = $("body");
var $selectBtn = $(".select__current");
var $selectItems = $(".select__btn");
var $shareFull = $(".share__full");
var $shareItem = $(".share__item");
var $teleportItem = $(".sm-teleport")


$(window).on("resize", function (){ 
  if (window.innerWidth <= 768)  {
    $teleportItem.appendTo(".layout")
  } else {
    $teleportItem.appendTo(".layout__left")
    
  }
})

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

function getShareFull() {
  $shareFull.on("click", function () {
    $shareItem.addClass("active");
    $shareFull.fadeOut(100);
  });
}
function getSelect() {
  $selectBtn.on("click", function () {
    var $this = $(this);
    $this.next().slideToggle(200);
    $this.find(".select__arrow").toggleClass("select__arrow--active");
  });
  //   выбор селекта
  $selectItems.on("click", function () {
    var parent = $(this).closest(".select");

    parent.find(".select__btn").removeClass("active");
    $(this).addClass("active");

    var currentSelect = $(this).children().children().clone(true, true);
    var currentValue = $(this).find(".select__text").data("value");
    parent.find("select option").prop("selected", false);
    parent.find(`select option[value=${currentValue}]`).prop("selected", true);

    parent.find(".select__current .select__content").html(currentSelect);
    parent.find(".select__list").slideUp(200);
  });
}

$(document).ready(function () {
  $(window).trigger('resize');
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
  if (document.querySelector(".start-section__slider")) {
    var sliders = [
      startSectionSlider,
      programSlider,
      advantagesSlider,
      giftSlider,
      registrationSlider,
    ];
    startSectionSlider.on("slideChange", function (evt) {
      var idx = evt.activeIndex;
      if (window.innerWidth < 1200) {
        sliders.forEach((i) => i.slideTo(idx));
      }
    });
    sliders.forEach((slider) => {
      slider.on("slideChange", function (evt) {
        var idx = evt.activeIndex;
        if (window.innerWidth > 1200) {
          sliders.forEach((i) => i.slideTo(idx));
        }
      });
    });
  }

  var mediaSlider = new Swiper(".media__slider", {
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
  var seeSlider = new Swiper(".see__slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  var rewardsSlider = new Swiper(".rewards__slider ", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  getShareFull();

  getSelect();

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
