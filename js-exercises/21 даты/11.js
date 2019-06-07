// Выведите на экран количество секунд, которое осталось до конца дня.

var date = new Date(),
  currentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59
  ),
  result = (currentDate.getTime() - date.getTime()) / 1000;

console.log(result);
