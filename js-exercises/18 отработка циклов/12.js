// Дан массив с числами.
// Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

var mass = [1, 2, 3, 4, 5],
  sum = 0;

for (let i = 0; i < mass.length; i++) {
  sum += mass[i];
}

sum = sum / mass.length;

console.log(sum);
