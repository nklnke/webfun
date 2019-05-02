// Замыкания

var func = function() {
  var i = 10;
  return function() {
    return i;
  };
};

var myFunc = func();

var anotherFunc = function() {
  var i = 20;
  console.log(myFunc());
};

anotherFunc(); // Благодаря тому, что мы что-то сделали в функции, кроме обхъявления переменной i, интерпретатор не уничтожает функцию после завершения, и anitherFunc(); возвращает не 20, а 10, хоть это и было объявлено выше в другой ф-ции.

console.log("");

// Создание замыкания при помощи анонимных самовызывающихся функций

var counter = (function() {
  var count = 0;
  return function(num) {
    count = num !== undefined ? num : count; // Условный оператор
    // Можем модифицировать счетчик не на +1, а на num, если он задан.
    // Если num не равна undefined, присваиваем счётчику это чтсло num.
    // Если num не задано, то значение остается тем же - count.
    return count++;
  };
})();

// То же самое другим способом

// var counter = function() {
//   counter.count = num !== undefined ? num : counter.count;
//   return counter.count++;
// };
// counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());
console.log(counter(50));
console.log(counter());
console.log(counter());
