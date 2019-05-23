// Найдите все года от 1 до 2019, сумма цифр которых
// равна 13. Для этого используйте вспомогательную
// функцию getDigitsSum из предыдущей задачи.

var sum = 0,
  years = [];

function getDigitsSum(num) {
  let string = String(num);
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  console.log(sum);
}

//for (let j = 0; j <= 2019; j++) {
//  if (getDigitsSum(j) == 13) {
//    years.push(j);
//  }
//}

console.log(years);

getDigitsSum(2018);
getDigitsSum(2017);
getDigitsSum(2017);
getDigitsSum(2017);
getDigitsSum(2019);
getDigitsSum(2017);
getDigitsSum(2017);
getDigitsSum(2017);
getDigitsSum(2017);
getDigitsSum(2017);
getDigitsSum(2017);

// Короче, проблема в том, похоже, что i продолжает увеличиваться.
// И почему-то прибавляется к ней по 10, а не по 1.
// По ходу надо без цикла функцию переделать.