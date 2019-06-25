let button = document.querySelector(".button"),
  elem = document.querySelector("#square");

function animation() {
  let position = 0,
    timerId = setInterval(frame, 5);

  function frame() {
    if (position == 400) {
      clearInterval(timerId);
    } else {
      position++;
      elem.style.top = position + "px";
      elem.style.left = position + "px";
    }
  }
}

button.addEventListener("click", animation);

// Анимация в реальных проектах делается за счёт
// присвоения элементам готовых классов через js.
// Например, при клике добавляется класс с
// translateX/opacity/..., и элемент
// начинает двигаться/мигать/...

///////////////////////////////////////////

// Делегирование: берём родителя и
// назначаем функции его потомам

let buttonBlock = document.querySelector(".button-block"),
  buttons = document.getElementsByTagName("button");

buttonBlock.addEventListener("click", function(event) {
  if (event.target && event.target.tagName == "BUTTON") {
    // первый event.target - проверка, есть ли вообще то, куда кликаем
    console.log("sasai");
  }

  if (event.target && event.target.classList.contains("first")) {
    alert("SASAI");
  }

  if (event.target && event.target.matches("button.second")) {
    alert("LALKAAAAAAAAAAAAAAAAAAAA");
  }
});
