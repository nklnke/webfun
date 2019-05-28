// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

var mass = [2, 3, 4],
  sum = 0;

for (let i = 0; i < mass.length; i++) {
  sum += Math.pow(mass[i], 2);
}

console.log(sum);
