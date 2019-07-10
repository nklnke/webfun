// Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.

var elem = document.getElementById("elem");

elem.insertAdjacentHTML("beforebegin", "<span>beforebegin</span>");

// Вставьте после него span с текстом '!!!'.

elem.insertAdjacentHTML("afterEnd", "<span>afterEnd</span>");

// Вставьте ему в начало span с текстом '!!!'.

elem.insertAdjacentHTML("afterBegin", "<span>afterBegin </span>");

// Вставьте ему в конец span с текстом '!!!'.

elem.insertAdjacentHTML("beforeEnd", "<span> beforeEnd</span>");
