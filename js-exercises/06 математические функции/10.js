// Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).

// Дробными

var mass = [];

for (let i = 0; i < 10; i++) {
  mass[i] = Math.random();
}

console.log(mass);

// Целыми

var arr = [];
for (i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}
console.log(arr);
