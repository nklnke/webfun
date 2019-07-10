// Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.

var elem = document.getElementById("elem");

elem.previousElementSibling.innerHTML += "!";

// Найдите его соседа снизу и добавьте ему в конец текст '!'.

elem.nextElementSibling.innerHTML = "!!";

// Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

var nextElem = elem.nextElementSibling;

nextElem.nextElementSibling.innerHTML += "!!!";
