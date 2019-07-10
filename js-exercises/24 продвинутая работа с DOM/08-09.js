// Дан элемент #elem. По клику на него выведите название его тега.

var elem = document.getElementById("elem");

elem.addEventListener("click", function() {
  console.log(elem.tagName);
});

// По клику на него выведите название его тега в нижнем регистре.

elem.addEventListener("click", function() {
  console.log(elem.tagName.toLowerCase());
});
