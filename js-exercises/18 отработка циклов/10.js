// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

var mass = [90, 5, 5],
  sum = 0;

for (let i = 0; i < mass.length; i++) {
  sum += mass[i];
}

console.log(sum);
