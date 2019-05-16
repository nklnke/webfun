// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

var mass = ["pn", "vt", "sr", "cht", "pt", "sb", "vsk"],
  day = "cht";

for (let i = 0; i < mass.length; i++) {
  if (mass[i] != day) {
    console.log(mass[i]);
  } else {
    console.log(mass[i] + "!!!!!!!!!");
  }
}
