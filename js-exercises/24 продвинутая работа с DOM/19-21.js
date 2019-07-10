// Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.

var elem = document.getElementById("elem");

elem.firstElementChild.style.cssText = "color: red;";

// Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

elem.lastElementChild.style.cssText = "color: green;";

// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

var childrens = elem.children;

childrens.forEach(element => {
  element.style.cssText = "color: yellow;";
});
