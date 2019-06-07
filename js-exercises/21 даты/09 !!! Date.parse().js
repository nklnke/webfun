// Выведите на экран количество часов, прошедшее
// между 1 марта 1988 года и текущим моментом
// с помощью Date.parse.

var date88 = Date.parse("1988-03-01"),
  currentDate = new Date(),
  result = (currentDate.getTime() - date88) / (1000 * 60 * 60);

console.log(result);
