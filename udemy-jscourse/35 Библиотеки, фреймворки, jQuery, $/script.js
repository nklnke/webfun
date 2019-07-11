// document.getElementById("btn"); - js
// $(".btn"); - jquery

// .addEventListener(); - js
// .on(); - jQuery

$(document).ready(function() {
  $(".list-item:first").hover(function() {
    $(this).toggleClass("active");
  });

  // addEventListener
  $(".list-item:eq(1)").on("click", function() {
    $(".img:even").fadeToggle("slow"); // even - чётные эл-ты
  });

  $(".list-item:eq(4)").on("click", function() {
    $(".img:odd").animate(
      {
        opacity: "toggle",
        height: "toggle"
      },
      1000
    );
  });
});

// Но jQuery устаревает, т.к. нативный js примерно то же самое умеет уже
// 1) .querySelectorAll
document.querySelectorAll(".list-item").forEach(element => {
  element.style.color = "red";
});
// 2) .classList
// 3) .addEventListener
// 4) $.ajax (jQuery) VS fetch (js)
// 5) .animate jquery VS .animate js

/**
 * Angular:
 * Самая подробная документация и поддержка, крупные проекты,
 * дольше и сложнее обучение
 * 1. node.js, npm
 * 2. TypeScript
 * 3. Webpack
 * 4. MVC (model view controller)
 * 5. Сам Angular
 *
 * React:
 * Гибкость, настройка под себя, под проект, больше скорость работы,
 * чистый js, смешанный с html
 * 1. node.js, npm
 * 2. Babel (es6 -> es5, т.к. react работает на es6)
 * 3. JSX
 * 4. Сборщик (н-р Webpack)
 * 5. Сам React
 *
 * Vue.js:
 * Легче обучение, проще структура
 * 1. node.js, npm
 * 2. Babel
 * 3. Сборщик (н-р Webpack)
 * 4. Сам Vue.js
 */
