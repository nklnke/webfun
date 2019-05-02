// выражение1 ? выражение2 : выражение3

var x = 15;
var text = x > 10 ? console.log("x больше 10") : console.log("x меньше либо равен 10");
console.log(text);

console.log("");

var y = 10;
var text1 = y > 10 ? console.log("y больше 10") : y < 10 ? console.log("y меньше 10") : console.log("y равен 10");
console.log(text1);

console.log("");

// То же самое через условие

if (y > 10) {
  text1 = console.log("y больше 10");
} else if (y < 10) {
  text1 = console.log("y меньше 10");
} else {
  text1 = console.log("y равен 10");
}

console.log(text1);
