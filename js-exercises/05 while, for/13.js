// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'

var mass = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  stroke = "";

for (let i = 0; i < mass.length; i++) {
  stroke += "-" + mass[i];
}

console.log(stroke + "-");
