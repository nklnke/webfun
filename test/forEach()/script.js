let square = document.querySelectorAll(".square");

// для querySelectorAll лучше использовать метод forEach(),
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
