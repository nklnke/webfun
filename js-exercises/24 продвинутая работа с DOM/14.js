// Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.

var ul = document.getElementById("ul"),
  li = document.getElementById("li");

var newLi = document.createElement("li");

newLi.innerHTML = "Sasai, first li";

ul.insertBefore(newLi, li);
