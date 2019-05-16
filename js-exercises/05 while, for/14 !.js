// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

var mass = ["pn", "vt", "sr", "cht", "pt", "sb", "vsk"];

for (let i = 0; i < mass.length; i++) {
  if (i <= 4) {
    console.log(mass[i]);
  } else {
    console.log(mass[i].toUpperCase() + "!");
  }
}
