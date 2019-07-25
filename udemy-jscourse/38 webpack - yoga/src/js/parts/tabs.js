function tabs() {
  // Табы
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"), // Родитель
    tabContent = document.querySelectorAll(".info-tabcontent");

  // В css прописаны классы .show (display: flex) и .hide (display: none)
  // .fade - fade-анимация

  // Функция, скрывающая табы
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1); // Скрываются все табы, начиная с a+1 из hideTabContent(a)
  // В данном случае (1) скрываются все, кроме первого таба (0 - первый, 1 - второй, ...)

  // Функция, показывающая таб-контент
  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  // Обработчик событий на клик по табу
  info.addEventListener("click", function(event) {
    let target = event.target;

    if (target && target.classList.contains("info-header-tab")) {
      // Попробовать без target &&
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0); // Скрываем все табы
          showTabContent(i); // Показываем i-тый таб
          break;
        }
      }
    }
  });
}

module.exports = tabs;
