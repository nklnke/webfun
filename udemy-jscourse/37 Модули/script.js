/**
 * - независимость и самодостаточность
 * - чистота глобального пространства имён переменных
 * - повторное использование (модули не зависят от другого кода)
 */

// let app = {
//   data: 45
// };

// console.log(app);

// Способы создания модулей:

// 1) Анонимная самовызывающаяся функция

let number = 1;

(function() {
  let number = 2;
  console.log(number);

  return console.log(number + 3);
})(); // Дополнительные скобки для вызова функции

console.log(number);

// 2) Объектный интерфейс

let user = (function() {
  let private = function() {
    console.log("huyaivate");
  };

  return {
    sayHello: function() {
      console.log("hello");
    }
  };
})();

console.log(user);
console.log(user.sayHello());

// 3) Все методы приватные

let user1 = (function() {
  let private = function() {
    console.log("huyaivate");
  };

  let sayHello = function() {
    console.log("hello");
  };

  return {
    sayHello: sayHello
  };
})();

console.log(user1);
console.log(user1.sayHello());
