let button = document.querySelector("#btn");
superbutton = document.querySelector("#superButton");

// Так можно использовать, но со временем
// можно ещё раз назначить обработчик
button.onclick = function() {
  alert("lalka");
};

button.onclick = function() {
  alert("lalusenka");
};

// А вот так вообще нормас
superbutton.addEventListener("click", function() {
  alert("normas 666");
});

superbutton.addEventListener("click", function() {
  alert("normas 777");
});

superbutton.addEventListener("mouseenter", function() {
  alert("PROSTO NORMAS");
});
