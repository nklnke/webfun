// Заполните массив следующим образом:
// в первый элемент запишите '1', во второй '22',
// в третий '333' и так далее.

var mass = [];

for (let i = 1; i < 10; i++) {
  var stroke = ""; // Хуй знает, почему, надо разобраться.
  // Всё работает, только если переменной дать значение ""
  // в цикле, а не в самом начале.

  for (let j = 0; j < i; j++) {
    stroke += i;
  }

  mass.push(stroke);
}

console.log(mass);
