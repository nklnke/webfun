// выражение1 ? выражение2 : выражение3

var x = 15;
var text = x > 10 ? "x больше 10" : "x меньше либо равен 10";
console.log(text);

console.log("");

var y = 10;
var text1 = y > 10 ? "y больше 10" : y < 10 ? "y меньше 10" : "y равен 10";
console.log(text1);

console.log("");

// То же самое через условие

if (y > 10) {
  text1 = "y больше 10";
} else if (y < 10) {
  text1 = "y меньше 10";
} else {
  text1 = "y равен 10";
}

console.log(text1);
