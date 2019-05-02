// if (выражение) инструкция

if (true) console.log("It's true");
if (false) console.log("It's true");

// Блок инструкций

var n = 5;
if (n < 3) {
  console.log(n);
} else if (n > 4) {
  console.log("n не меньше 3");
  console.log("...");
}

console.log("");

// Перебор значений с помощью else if

var name = "Cokes",
    homecity;

if (name === "Chlen") {
  homecity = "Членляндия";
} else if (name === "Cokes") {
  homecity = "Невьянск";
} else if (name === "Zhopa") {
  homecity = "Жопляндия";
}

console.log(homecity);

console.log("");

// switch case

switch (name) {
  case "Chlen":
    homecity = "Членляндия";
    break;
  case "Cokes":
    homecity = "Невьянск";
    break;
  case "Zhopa":
    homecity = "Жопляндия";
    break;
  default:
    homecity = "Ссангород";
}

console.log(homecity);
