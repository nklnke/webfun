// Дан элемент #elem. Добавьте ему класс www.
// Удалите у него класс www.

var elem = document.getElementById("elem");

elem.classList.add("www");
elem.classList.remove("www");

// Проверьте наличие у него класса www.

console.log(elem.classList.contains("www")); // false

// Добавьте ему класс www, если его нет. Удалите, если есть.

if (elem.classList.contains("www") == false) {
  elem.classList.add("www");
} else {
  elem.classList.remove("www");
}

// Узнайте количество его классов.

console.log(elem.classList.length);

// Выведите последовательно алертом его классы.

var classNames = elem.classList;

for (let i = 0; i < classNames.length; i++) {
  alert(elem[i]);
}
