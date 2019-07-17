// window.addEventListener("load", ...) // Скрипт начнёт выполняться после того, как загрузится абсолютно всё

window.addEventListener("DOMContentLoaded", function() {
  // Скрипт начнёт выполняться сразу после загрудки дерева DOM, не дожидаясь, например, прогрузки картинок
  "use strict";

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

  hideTabContent(1); // Скрываются все табы, кроме первого (0 - первый, 1 - второй, ...)

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

  // Timer
  let deadline = "2019-10-21";

  // Функция, определяющая остаток времени до дедлайна
  function getTimeRemaining(endTime) {
    let t = Date.parse(endtime) - Date.parse(new Date()), // Сюда записывается разница в датах в мсекундах
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      hours = Math.floor(t / (100 * 60 * 60));
    // days = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  // Функция, записывающая показания в документ
  function setClock(id, endTime) {
    
  }
});

// 13:00
