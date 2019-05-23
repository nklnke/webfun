// Найдите все года от 1 до 2019, сумма цифр которых
// равна 13. Для этого используйте вспомогательную
// функцию getDigitsSum из предыдущей задачи.

var years = [];

function getDigitsSum(num) {
  var sum = 0;
  let string = String(num);
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  return sum;
}

for (let j = 0; j <= 2019; j++) {
  if (getDigitsSum(j) == 13) {
    years.push(j);
  }
}

console.log(years);

// Короче, проблема была в том, что sum должна была определяться
// внутри функции. И обязательно return sum
