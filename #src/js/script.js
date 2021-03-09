$(document).ready(function () {
  const startSectionSlider = new Swiper(".start-section__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const statisticSlider = new Swiper(".statistic__slider", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 5,
  });

  const programSlider = new Swiper(".program__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const advantagesSlider = new Swiper(".advantages__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false,
  });
  const giftSlider = new Swiper(".gift__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const awardSlider = new Swiper(".awards__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    slidesPerView: 5,
    spaceBetween: 30,
  });
  const registrationSlider = new Swiper(".registration__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const footerSlider = new Swiper(".footer__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 12,
    spaceBetween: 10,
    watchSlidesVisibility: true,
  });

  const sliders = [
    startSectionSlider,
    programSlider,
    advantagesSlider,
    giftSlider,
    registrationSlider,
  ];
  sliders.forEach((slider) => {
    slider.on("slideChange", function (evt) {
      console.log(evt);
      const idx = evt.activeIndex;
      if (idx <= 2) {
        sliders.forEach((i) => i.slideTo(idx));
      }
    });
  });

  $(".marquee").marquee({
    duration: 15000,
    gap: 190,
    direction: "left",
    duplicated: true,
  });
  $(".tooltip-js").tooltipster();
  jQuery(".scrollbar-outer").scrollbar();
});
