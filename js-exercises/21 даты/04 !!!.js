// Выведите на экран текущую дату-время
// в формате '12:59:59 31.12.2014'. Для решения этой
// задачи напишите функцию, которая будет добавлять
// 0 перед днями и месяцами, которые состоят
// из одной цифры (из 1.9.2014 сделает 01.09.2014).

var currentDate = new Date();

function zero(num) {
  if (num > 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

console.log(
  currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds() +
    " " +
    zero(currentDate.getDate()) +
    "." +
    zero(currentDate.getMonth()) +
    "." +
    currentDate.getFullYear()
);
