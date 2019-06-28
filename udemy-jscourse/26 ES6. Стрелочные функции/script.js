// Облегчённый синтаксис
// (arguments) => {};

// Анонимна: не можем дать ей имени
// (можно только поместить в переменную).
// После этого нужно вызвать переменную как функцию
// (со скобками).

// Т.е. нельзя управлять обработчиками событий,
// если это необходимо, и нельзя сделать рекурсию
// (запустить функцию внутри себя).

// Своего контекста вызова не имеет. Берёт его у родителя.

// Чаще используется в setInterval, setTimeout и AJAX.

let fun = () => {
  console.log(this);
};

fun();

/////////////////////////////////

let obj = {
  number: 5,
  sayNumber: function() {
    let say = () => {
      console.log(this);
    };
    say();
  }
};

obj.sayNumber();

//////////////////////////////////

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  let showThis = () => {
    console.log(this);
  };
  showThis();
});
