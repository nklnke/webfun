// Выведите на экран количество секунд с начала дня до настоящего момента времени.

// Можно жестко задать текущую дату и посчитать разницу, но лучше универсальный вариант

var date = new Date(),
  currentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0
  ),
  result = (date.getTime() - currentDate.getTime()) / 1000;

console.log(result);
