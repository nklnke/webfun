// Сделайте функцию getDigitsSum (digit - это цифра),
// которая параметром принимает целое число и возвращает
// сумму его цифр.

function getDigitsSum(num) {
  var sum = 0;
  let string = String(num);
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  return sum;
}

console.log(getDigitsSum(22222222));
console.log(getDigitsSum(22222222));
console.log(getDigitsSum(22222222));
getDigitsSum(22222222);
getDigitsSum(22222222);
