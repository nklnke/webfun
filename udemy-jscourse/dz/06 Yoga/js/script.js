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

  // Timer deadline
  let deadline = "2019-07-19";

  // Функция "16:9:4 -> 16:09:04"
  function zero(num) {
    if (num <= 9) {
      return "0" + num;
    } else return num;
  }

  // Функция, определяющая остаток времени до дедлайна
  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()), // Сюда записывается разница в датах в мсекундах
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  // Функция, записывающая показания в документ
  function setClock(id, endTime) {
    // id - id блока с таймером в документе. endTime - сюда придёт deadline

    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds");

    // Интервал обновления 1 сек
    let timeInterval = setInterval(updateClock, 1000);

    // Функция, textContentящая данные на страницу
    function updateClock() {
      let t = getTimeRemaining(endTime); // Помещаем объект функции getTimeRemaining() в техническую переменную t

      hours.textContent = t.hours;
      minutes.textContent = zero(t.minutes);
      seconds.textContent = zero(t.seconds);

      // Остановка таймера
      if (t.total <= 0) {
        clearInterval(timeInterval);

        hours.textContent = minutes.textContent = seconds.textContent = 0;
      }
    }

    updateClock(); // Запускаем таймер сразу же, не ждём 1 секунду
  }

  setClock("timer", deadline); // timer - id таймера в документе
});
