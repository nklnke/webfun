// Условия

if (2 * 4 == 8) {
  console.log("True");
} else {
  console.log("False");
}

console.log("");

let num = 50;

if (num < 49) {
  console.log("Мало");
} else if (num > 51) {
  console.log("Много");
} else {
  console.log("Верно");
}

// То же самое с условным оператором

console.log("");

num < 49
  ? console.log("Мало")
  : num > 51
  ? console.log("Много")
  : console.log("Верно");

// Switch case

console.log("");

switch (num) {
  case num < 49:
    console.log("Мало");
    break;
  case num > 51:
    console.log("Много");
    break;
  case num = 50:
    console.log("Верно");
    break;
  default:
    console.log("Что-то пошло не так");
}
