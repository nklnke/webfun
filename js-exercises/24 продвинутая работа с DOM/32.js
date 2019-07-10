// Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.

var mass = [1, 2, 3, 4, 5],
  ul = document.createElement("ul"),
  body = document.getE;

for (let i = 0; i < mass.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = mass[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);
