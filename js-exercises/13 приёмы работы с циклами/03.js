// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.

var stroke = "-";

for (let i = 1; i < 10; i++) {
  stroke += i + "-";
}

console.log(stroke);
