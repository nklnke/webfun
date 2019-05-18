// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

var stroke = "var_test_text",
  newStroke = stroke.split("_"),
  num = "";

// Поизящнее

for (let i = 1; i < newStroke.length; i++) {
  newStroke[i] = newStroke[i][0].toUpperCase() + newStroke[i].slice(1);
}

console.log(newStroke.join(" "));

// Поговнистее

for (let i = 0; i < newStroke.length; i++) {
  if (i == 0) {
    num += newStroke[i] + " ";
  } else {
    num += newStroke[i][0].toUpperCase() + newStroke[i].slice(1) + " ";
  }
}

num = num.split();

console.log(num.join(" "));
