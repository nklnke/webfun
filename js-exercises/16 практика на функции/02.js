// Дана строка вида 'var_text_hello'.
// Сделайте из него текст 'varTextHello'.

var str = "var_text_hello";

function ucFirst(stroke) {
  let newStroke = stroke.split("_");
  for (let i = 1; i < newStroke.length; i++) {
    newStroke[i] = newStroke[i][0].toUpperCase() + newStroke[i].slice(1);
  }
  newStroke = newStroke.join("");
  console.log(newStroke);
}

ucFirst(str);
