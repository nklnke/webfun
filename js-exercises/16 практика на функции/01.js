// Дана строка. Сделайте заглавным первый символ каждого
// слова этой строки. Для этого сделайте вспомогательную
// функцию ucfirst, которая будет получать строку,
// делать первый символ этой строки заглавным и возвращать
// обратно строку с заглавной первой буквой.

var str = "каждый охотник желает знать, где сидит фазан";

function ucFirst(stroke) {
  let newStroke = stroke.split(" ");
  for (let i = 0; i < newStroke.length; i++) {
    newStroke[i] = newStroke[i][0].toUpperCase() + newStroke[i].slice(1);
  }
  newStroke = newStroke.join(" ");
  console.log(newStroke);
}

ucFirst(str);
