// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

var stroke = "";

for (let i = 0; i < 5; i++) {
  stroke += "xx";
  console.log(stroke);
}

// Для подключения скрипта к странице:

// var stroke = "xx";

// for (let i = 0; i < 5; i++) {
//   document.write(stroke + "<br>");
//   stroke += "xx";
// }
