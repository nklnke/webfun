// Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.

var btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  btn.parentElement.style.cssText += "display: none;";
});
