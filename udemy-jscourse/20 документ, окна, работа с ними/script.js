// document - вся вёрстка, dom. Находится внутри window.
// window - окно, в котором показывается документ
// (включая адресную строку, значки плагинов, заголовок вкладки, ...)
// screen - весь видимый монитор (на него никак не повлиять)

let box = document.querySelector(".box"),
  btn1 = document.querySelector("#expand"),
  btn2 = document.querySelector("#scrollSize"),
  btn3 = document.querySelector("#toTop"),
  btn4 = document.querySelector("#scrollNpx"),
  btn5 = document.querySelector("#scrollTo");

let width = box.clientWidth,
  height = box.clientHeight,
  width1 = box.offsetWidth,
  height1 = box.offsetHeight,
  width2 = box.scrollWidth,
  height2 = box.scrollHeight;
// все они измеряются в единицах без px

console.log(width);
console.log(height);

console.log(width1);
console.log(height1);

console.log(width2);
console.log(height2);

// Возвращает объект с параметрами расположения элемента
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().left);

// Возвращает ширину/высоту документа
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

// По клику на кнопку раскрывается всё содержимое
btn1.addEventListener("click", function() {
  box.style.height = box.scrollHeight + "px";
});

// По клику на кнопку показывается, сколько уже проскроллили
btn2.addEventListener("click", function() {
  console.log(box.scrollTop);
});

// По клику на кнопку scroll to top
btn3.addEventListener("click", function() {
  box.scrollTop = 0;
  // or
  // document.documentElement.scrollTop = 0;
});

// По клику на кнопку scroll на n пикселей вверх/вниз
btn4.addEventListener("click", function() {
  box.scrollBy(0, 50); // скролл по координатам относительно текущего положения
});

// По клику на кнопку scroll на n пикселей вверх/вниз
btn5.addEventListener("click", function() {
  box.scrollTo(0, 150); // скролл по координатам по абсолютным координатам
});
