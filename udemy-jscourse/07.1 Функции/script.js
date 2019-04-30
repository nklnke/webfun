// first в коде идёт раньше second, но выполяетя позже

function first() {
  // что-то делаем
  setTimeout(function() {
    console.log(1);
  }, 1000);
}

function second() {
  console.log(2);
}

first();
second();

// Чтобы такого не происходило, используются callback-функции

function learnJS(language, callback) {
  console.log("Я учу " + language);
  callback();
}

learnJS("Javascript", function() {      // У learnJS было два параметра, значит здесь указываем тоже два.
  console.log("Я прошёл третий хуёк");  // Т.к. вторым аргументом идёт callback и мы его уже вызывали,
                                        // то предполагается, что это будет функция.
});
