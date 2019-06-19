let div = document.getElementById("div"),
  buttons = document.getElementsByTagName("button"),
  circle = document.getElementsByClassName("circle"),
  square = document.querySelectorAll(".square"),
  squareFirst = document.querySelector(".square");

div.style.backgroundColor = "red";

buttons[1].style.borderRadius = "50px";

// для одного элемента
circle[1].style.color = "green";

// для всех элементов - цикл
for (let i = 0; i < square.length; i++) {
  square[i].innerHTML = "50px";
}

// но для querySelectorAll лучше использовать forEach(),
// а не цикл. forEach() выполняет указанную функцию
// один раз для каждого элемента в массиве
square.forEach(element => {
  element.style.backgroundColor = "gray";
});

square.forEach(function(elem, i, hearts) {
  // каждый_перебираемый_элемент, i, передаваемый_массив
  // (но его нужно назвать по-другому)
  elem.style.color = "red";
});

square.forEach(function(element) {
  console.log(element);
});
