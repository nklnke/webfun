// Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding.

var elem = document.getElementById("elem"),
  btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  alert(
    `width: ${getComputedStyle(elem).width}, height: ${
      getComputedStyle(elem).height
    }`
  );
});
