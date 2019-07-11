// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding.

var elem = document.getElementById("elem"),
  btn1 = document.getElementById("btn1"),
  btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
  alert(`clientWidth ${elem.clientWidth}`);
});

// По нажатию на кнопку выведите его полную высоту без учета границы, но с padding.

btn2.addEventListener("click", function() {
  alert(`clientHeight ${elem.clientHeight}`);
});
