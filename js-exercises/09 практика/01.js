// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

var stroke = "дана строка";

// 1

console.log(stroke[0].toUpperCase() + stroke.slice(1));

// 2

stroke = stroke.split("");
stroke[0] = stroke[0].toUpperCase();

var mass = stroke.join("");

console.log(mass);
