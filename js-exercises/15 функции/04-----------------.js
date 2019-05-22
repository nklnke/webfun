// Найдите все года от 1 до 2019, сумма цифр которых
// равна 13. Для этого используйте вспомогательную
// функцию getDigitsSum из предыдущей задачи.

var sum = 0,
  years = [];

function getDigitsSum(num) {
  var string = String(num);
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  console.log(sum);
}

for (let i = 0; i <= 2017; i++) {
  if (getDigitsSum(i) == 13) {
    years.push(i);
  }
}

console.log(years);

getDigitsSum(2017);
