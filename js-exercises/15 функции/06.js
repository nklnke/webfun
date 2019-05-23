// Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven
// из предыдущей задачи.

var mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
  newMass = [];

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < mass.length; i++) {
  if (isEven(mass[i])) {
    newMass.push(mass[i]);
  }
}

console.log(newMass);
