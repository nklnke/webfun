// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.

var stroke = "123456";
result = stroke
  .split("")
  .reverse()
  .join("");

console.log(result);
