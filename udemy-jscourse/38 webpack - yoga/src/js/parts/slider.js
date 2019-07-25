function slider() {
  // Переменные слайдера
  let slideIndex = 1, // Текущий слайд. Будет изменяться
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

  /**
   * - - - Нужно после объявления переменных обязательно
   * - - - вызвать функцию, иначе она заработает только
   * - - - после клика по доту или стрелке
   */
  showSlides(slideIndex);

  // Основная функция слайдера (меняет классы, скрывает/отображает)
  function showSlides(n) {
    // Если слайд последний и листаем вперёд, то переход к первому
    if (n > slides.length) {
      slideIndex = 1;
    }

    // Если слайд первый и листаем назад, то переход к последнему
    if (n < 1) {
      slideIndex = slides.length;
    }

    // Сначала все слайды скрываем, а доты делаем неактивными
    slides.forEach(element => {
      element.style.display = "none";
    });

    dots.forEach(element => {
      element.classList.remove("dot-active");
    });

    // Потом показываем текущий слайд и соответствующий дот
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }

  // Функция, изменяющая slideIndex и сразу вызывающая showSlides()
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Функция, определяющая текущий слайд и устанавливающая его
  // (например, с 1 переход сразу на 4)
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  // prev button
  prev.addEventListener("click", function() {
    plusSlides(-1);
  });

  // next button
  next.addEventListener("click", function() {
    plusSlides(1);
  });

  // dots (используем делегирование событий)
  dotsWrap.addEventListener("click", function(event) {
    // +1 и -1 - компенсации отсчёта с 0
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains("dot") &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;
