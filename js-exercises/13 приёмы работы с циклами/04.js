// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

var stroke = "";

for (let i = 0; i <= 40; i++) {
  stroke += "x";
  document.write(stroke + "<br>");
}

console.log(stroke);
