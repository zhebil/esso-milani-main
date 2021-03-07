const startSectionSlider = new Swiper(".start-section__slider", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})
const statisticSlider = new Swiper(".statistic__slider", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 5
})


const programSlider = new Swiper(".program__slider", {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})


$('.marquee').marquee({
	duration: 15000,
  gap: 190,
	direction: 'left',
	duplicated: true
});