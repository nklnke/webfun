// Дан массив с числами.
// Запишите в новый массив только те числа,
// которые больше нуля и меньше 10-ти.
// Для этого используйте вспомогательную
// функцию isNumberInRange из предыдущей задачи.

var mass = [1, -9, 7, 32, 5, 0],
  newMass = [];

function isNumberInRange(num) {
  if (num > 0 && num < 10) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < mass.length; i++) {
  if (isNumberInRange(mass[i])) {
    newMass.push(mass[i]);
  }
}

console.log(newMass);
