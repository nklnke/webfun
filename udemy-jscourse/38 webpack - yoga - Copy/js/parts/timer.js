function timer() {
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
}

module.exports = timer;
