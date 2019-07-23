// window.addEventListener("load", ...)
// Скрипт начнёт выполняться после того, как загрузится абсолютно всё

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

  // Timer deadline
  let deadline = "2020-07-19";

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

  // Запуск таймера
  setClock("timer", deadline); // timer - id таймера в документе

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

  // Форма обратной связи
  let message = {
    loading: "Loading...",
    success: "Thank you for sign up",
    failure: "Opps... Something went wrong"
  };

  let form = document.querySelector(".main-form"), // Modal form
    inputs = form.getElementsByTagName("input"),
    statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  // Обаботчик submit нужно весить не на button, а на всю форму
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяет перезагрузку страницы после отправки формы

    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php"); // Отправка данных на сервер
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8"); // Описание запроса на сервер, что он содержит данные, полученные из формы

    // Создаyние из данных формы структуры формата "ключ: значение"
    let formData = new FormData(form);

    // Преобразование данных формы в JSON формат
    let tempObj = {};
    formData.forEach(function(value, key) {
      tempObj[key] = value;
    });

    let json = JSON.stringify(tempObj);

    // console.log(tempObj);
    // console.log(json);

    request.send(json);

    // Оповещение пользователя о текущем состоянии запроса
    request.addEventListener("readystatechange", function() {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    // Очистка полей формы после отправки данных
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  });

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
});
