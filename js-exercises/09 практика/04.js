// Проверьте, что строка заканчивается на .html.

var stroke =
  "http://code.mu/tasks/javascript/base/praktika-na-kombinacii-standartnyh-funkcij-javascript.html";

if (stroke.substr(-5) == ".html") {
  console.log(true);
} else {
  console.log(false);
}

console.log(stroke);
