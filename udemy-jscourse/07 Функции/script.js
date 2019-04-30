// Функции

function showFirstMessage(text) {
  alert(text);
}

showFirstMessage("Hello World!");

// Вызываем функцию с разными параметрами

function calc(a, b) {
  return a + b;
}

console.log(calc(7, 3.368));
console.log(calc(-7, 3.368));
console.log(calc(-7, 0.368));

console.log("");

// return также возвращает переменную во "внешний мир"

function returnVar() {
  let num = 50;
  return num;
}

let anotherNum = returnVar();
console.log(anotherNum);

console.log("");

// Современный стандарт объявления функций ES6

let calcES6 = (c, d) => c + d;

console.log(calcES6(5, 15));
console.log(calcES6(666, 0.154));
