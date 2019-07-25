function modal() {
  // Modal window
  let more = document.querySelector(".more"),
    descriptionBtn = document.querySelectorAll(".description-btn"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close");

  // event listenerы на кнопки "Узнать больше" в табах
  for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener("click", function() {
      overlay.style.display = "block";
      this.classList.add("more-splash"); // Анимация кнопки

      // Запрет прокрутки страницы при открытом модальном окне
      document.body.style.overflow = "hidden";
    });
  }

  // listener на кнопку под таймером
  more.addEventListener("click", function() {
    overlay.style.display = "block";
    this.classList.add("more-splash"); // Анимация кнопки

    // Запрет прокрутки страницы при открытом модальном окне
    document.body.style.overflow = "hidden";
  });

  // modal close button
  close.addEventListener("click", function() {
    overlay.style.display = "none";
    more.classList.remove("more-splash"); // Анимация кнопки

    document.body.style.overflow = "";
  });
}

module.exports = modal;
