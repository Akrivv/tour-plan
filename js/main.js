const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  // Листать стрелками на клавиатуре
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Листать колесиком мыши
  mousewheel: {
    invert: true,
  },
  // Автоматическое перелистывание слайдов
  autoplay: {
    delay: 5000,
  },
});
