// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

var mass = [1, 2, 3, 4, 5],
  sum = 0;

for (let i = 0; i < mass.length; i++) {
  sum += mass[i];
}

console.log(sum);
