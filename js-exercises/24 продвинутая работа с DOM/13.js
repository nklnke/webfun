// Дан ul. Дан массив. Вставьте элементы этого массива
// в конец ul так, чтобы каждый элемент стоял в своем li.
// Сделайте так, чтобы к вставляемым li было привязано
// следующее событие: по нажатию на li она должна вывести
// на экран свой текст.

var elem = document.getElementById("ul"),
  mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < mass.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = mass[i];

  elem.appendChild(li);

  li.addEventListener("click", function() {
    console.log(li.innerHTML);
  });
}
