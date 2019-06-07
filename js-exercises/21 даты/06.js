// Выведите на экран текущий день недели (словом, по-русски).
// Создайте для этого вспомогательную функцию showDay,
// которая параметром принимает число, а возвращает день недели по-русски.

var currentDate = new Date(),
  currentDay = currentDate.getDay();

function showDay(num) {
  var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

  // С циклом длиннее, но можно тоже
  // for (let i = 0; i < days.length; i++) {
  //   return days[num];
  // }

  return days[nums];
}

console.log(showDay(currentDay));
