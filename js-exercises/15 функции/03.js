// Сделайте функцию getDigitsSum (digit - это цифра),
// которая параметром принимает целое число и возвращает
// сумму его цифр.

var sum = 0;

function getDigitsSum(num) {
  var string = String(num);
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  console.log(sum);
}

getDigitsSum(22222222);
