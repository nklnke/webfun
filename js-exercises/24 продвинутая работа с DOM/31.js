// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

var input = document.getElementById("input"),
  btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var cloneInput = input.cloneNode(true);

  input.parentElement.appendChild(cloneInput);
});
