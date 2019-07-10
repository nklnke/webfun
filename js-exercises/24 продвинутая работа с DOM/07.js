// Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу.
// Решите задачу с помощью свойства cssText.

var elem = document.getElementById("elem");

elem.style.cssText = "background: red; width: 30px; border: 1px solid green;";
