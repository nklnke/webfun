// Дан ol. Вставьте ему в конец li с текстом 'пункт'.

var elem = document.getElementById("ol"),
  li = document.createElement("li");

li.innerHTML = "text";

elem.appendChild(li);
