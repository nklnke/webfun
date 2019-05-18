// Преобразуйте первую букву каждого слова строки в верхний регистр.

var stroke = "первую букву каждого слова строки в верхний регистр",
  newStroke = stroke.split(" "),
  num = [];

for (let i = 0; i < newStroke.length; i++) {
  num += newStroke[i][0].toUpperCase() + newStroke[i].slice(1) + " ";
}

console.log(num);
