let buttons = document.querySelectorAll("button"),
  wrapper = document.querySelector(".wrapper"),
  link = document.querySelector("a");

buttons[0].addEventListener("click", function(event) {
  console.log(event);

  let target = event.target;
  target.style.display = "none";

  console.log(
    "произошёл взлом жопы " + event.type + " на элементе " + event.target
  );
});

// Всплытие событий. Поднятие вверх по иерархии.
// Обработчик событий сначала срабатывает на сложенном эл-те,
// затем на родителе, затем выше и выше.
// click срабатывает и по клику по диву, и по клику по кнопке.
wrapper.addEventListener("click", function() {
  console.log(
    "произошёл взлом жопы " + event.type + " на элементе " + event.target
  );
});

// Отмена стандартных событий браузера
link.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("SASAI YTUB");
});

// Самый предпочтительный метод для назначения обработчиков событий
buttons.forEach(element => {
  element.addEventListener("mouseleave", function() {
    console.log("what?");
  });
});
