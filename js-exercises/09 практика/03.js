// Проверьте, что строка начинается на http://.

var stroke =
  "http://code.mu/tasks/javascript/base/praktika-na-kombinacii-standartnyh-funkcij-javascript.html";

if (stroke.slice(0, 7) == "http://") {
  console.log(true);
} else {
  console.log(false);
}

console.log(stroke);
