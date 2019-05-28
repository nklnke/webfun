// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

var mass = [];

for (let i = 0; i <= 10; i++) {
  mass.push(Math.round(Math.random().toFixed(2) * 10 + 1)); // +1, чтобы не было 0 в массиве
}

console.log(mass);
