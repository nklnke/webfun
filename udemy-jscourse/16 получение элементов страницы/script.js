let div = document.getElementById("div");

console.log(div);

let buttons = document.getElementsByTagName("button");

buttons[2].innerHTML = "SASAI";
console.log(buttons);

let circle = document.getElementsByClassName("circle");

circle[2].innerHTML = "LALKA";
console.log(circle[2]);

// получение через селектор:
// .class, #id, .class1 .class2, ...
let squareFirst = document.querySelector(".square"),
  square = document.querySelectorAll(".square");

console.log(squareFirst);
console.log(square);
