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

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [7.996818, 98.29318],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 13,
    }),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [7.996818, 98.29318],
      },
    }),
    myPieChart = new ymaps.Placemark([7.996818, 98.29318]);
  myMap.geoObjects
    .add(myGeoObject)
    .add(myPieChart)
    .add(
      new ymaps.Placemark(
        [7.996818, 98.29318],
        {
          balloonContent: "цвет <strong>воды пляжа бонди</strong>",
        },
        {
          preset: "islands#icon",
          iconColor: "#0095b6",
        }
      )
    );
}
