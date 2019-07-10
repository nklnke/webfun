// Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.

var elem = document.getElementById("elem");

elem.parentElement.style.backgroundColor = "red";

// Найдите родителя его родителя и покрасьте его в красный цвет.

var parElem = elem.parentElement;

parElem.parentElement.style.backgroundColor = "green";
