// Дан двухмерный массив с числами, например
// [[1, 2, 3], [4, 5], [6]].
// Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.

var mass = [[1, 2, 3], [4, 5], [6]],
  sum = 0;

for (let i = 0; i < mass.length; i++) {
  for (let j = 0; j < mass[i].length; j++) {
    sum += mass[i][j];
  }
}

console.log(sum);
