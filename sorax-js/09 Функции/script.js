// function идентификатор(аргументы) {
//  инструкции
//  return выражение
// }

function greed(name) {
  return "Hello " + name;
}

// выражение(аргументы) - вызываем то, что мы записали в функцию

console.log(greed("cokes").toUpperCase());

console.log("");

// Определение функции

var greed1 = function(name1) {
  return "Hello " + name1 + " 1";
};
console.log(greed1("cokes").toUpperCase());

console.log("");

// Объект arguments
// ведёт сабя, как массив

var greed2 = function(name2) {
  console.log(arguments);
  console.log(arguments[2]);
  console.log(arguments.length);
  return "Hello " + name2 + " 1";
};

console.log(greed2("cokes", 34, 23, 26).toUpperCase());
