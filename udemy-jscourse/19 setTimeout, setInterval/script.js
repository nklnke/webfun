// let timer = setTimeout(hello, 1000);
// clearTimeout(timer); // Остановка таймера

// function hello() {
//   console.log("hello 1sec");
// }

////////////////////////////////

// let timer1 = setInterval(goodbye, 1000);
// clearTimeout(timer1);

// function goodbye() {
//   console.log("GUDB I");
// }

////////////////////////////////

// Рекурсивный вызов функции
let timer2 = setTimeout(function log() {
  console.log("sasai");
  setTimeout(log, 250);
});
