// Дан массив с числами. Узнайте, сколько элементов
// с начала массива надо сложить, чтобы в сумме
// получилось больше 10-ти.

var mass = [1, 2, 0, 1, 4, 5, 4, 87],
  sum = 0,
  counter = 0;

for (let i = 0; i < mass.length; i++) {
  if (sum < 11) {
    sum += mass[i];
    counter++;
  }
}

console.log(sum);
console.log("Необходимо " + counter + " элементов");
