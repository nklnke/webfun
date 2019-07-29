// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding.

var elem = document.getElementById("elem"),
  btn1 = document.getElementById("btn1"),
  btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
  alert(`offsetWidth ${elem.offsetWidth}`);
});

// По нажатию на кнопку выведите его полную высоту с учетом границы и padding.

btn2.addEventListener("click", function() {
  alert(`offsetHeight ${elem.offsetHeight}`);
});

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}