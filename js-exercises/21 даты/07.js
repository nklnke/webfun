// Узнайте, какой был 7-го января 2015 года.

var date = new Date(2015, 0, 7);

function showDay(num) {
  var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

  return days[num];
}

console.log(showDay(date.getDay()));
