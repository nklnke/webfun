// Даны элементы с классом www. Добавьте каждому элементу
// в конец название его тега в нижнем регистре.

var elem = document.getElementsByClassName("www");

for (let i = 0; i < elem.length; i++) {
  elem[i].innerHTML += elem[i].tagName.toLowerCase();
}
