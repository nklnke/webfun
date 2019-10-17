// Жизнь таймеру обеспечивает функция update, вызываемая каждую секунду

function update() {
  var date = new Date();
  console.log(date.toLocaleString());
}

// Функция start для запуска таймера

function start() {
  setInterval(update, 1000);
  update(); // начать тут же, не ждать 1 секунду, пока setInterval сработает
}

start();
