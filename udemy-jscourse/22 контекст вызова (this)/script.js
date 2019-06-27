// Способы вызова функции

// 1) Просто вызов функции
// В итоге получаем window или undefined,
// в зависимости от того, работаем в строгом
// режиме, или нет

// "use strict";
function showThis(a, b) {
  console.log(this);

  function sum() {
    console.log(this);
    // return this.a + this.b;
    return a + b;
  }

  console.log(sum());
}

showThis(4, 5);

// 2) Метод объекта this равняется самому объекту

let obj = {
  a: 20,
  b: 15,
  sum: function() {
    console.log(this);
    function shout() {
      console.log(this);
    }
    shout(); // shout() потеряла контекст,
    // т.к. вызвана просто как функция внутри функции,
    // а не метод.
  }
};

obj.sum();

// 3) Через new.
// В этом случае this ссылается на новосозданный объект

// 4) Ручное присваивание функций
// Указание конкретного контекста
// call, apply, bind.

let user = {
  name: "John"
};

function sayName(surname) {
  console.log(this);
  console.log(this.name + " " + surname);
}

console.log(sayName.call(user, "Huith")); // В call нужно передавать параметры в виде строки
console.log(sayName.apply(user, ["Huiow"])); // В apply параметры можно передать в виде массива

// Функция удваивания start
function count(number) {
  return this * number;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(14));
console.log(double(0.6));
// Функция удваивания end

///////////////////////////////////////

// this и DOM

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  console.log(this);
  this.style.backgroundColor = "red";
});
