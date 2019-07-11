// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы.

var elem = document.getElementById("elem"),
  btn1 = document.getElementById("btn1"),
  btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
  alert(`clientTop ${elem.clientTop}`);
});

// По нажатию на кнопку выведите толщину его левой границы.

btn2.addEventListener("click", function() {
  alert(`clientLeft ${elem.clientTop}`);
});
