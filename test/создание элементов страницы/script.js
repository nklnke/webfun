let div = document.createElement("div"),
  p = document.createElement("p"),
  footer = document.createElement("footer"),
  text = document.createTextNode("Some text for wrapper"),
  wrapper = document.querySelector(".wrapper");

// classList.***("") - операции с классами
div.classList.add("some-class");
div.classList.add("some-class1");
div.classList.remove("some-class1");
div.innerHTML = "<h1>some div</h1>";

// добавление в элемент текста
footer.textContent = text;

// добавление элемента в конец родителя
document.body.appendChild(footer);

// добавление элемента в конец родителя
wrapper.appendChild(div);

// добавление эл-та перед чем-то
document.body.insertBefore(p, wrapper); // что_добавляем, перед_чем_добавляем
document.body.insertBefore(text, p);

// удаление эл-та из родителя
document.body.removeChild(text);
wrapper.removeChild(div);

// замена одного эл-та на другой (с перемещением)
document.body.replaceChild(div, p);

console.log(div);
console.log(text);
