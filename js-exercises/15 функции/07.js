// Сделайте функцию getDivisors, которая параметром принимает
// число и возвращает массив его делителей
// (чисел, на которое делится данное число).

var mass = [];

function getDivisors(num) {
  for (let i = 1; i < 10; i++) {
    if (num % i == 0) {
      mass.push(i);
    }
  }
  console.log(mass);
}

// getDivisors(9);
getDivisors(8);
// getDivisors(4);
