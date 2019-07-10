// Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.

var input = document.getElementById("input"),
  btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var cloneInput = input.cloneNode(true);

  input.parentElement.appendChild(cloneInput);
});
