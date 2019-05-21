// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

var mass = [],
  stroke = "";

for (let i = 0; i < 10; i++) {
  stroke += "x";
  mass.push(stroke);
}

console.log(mass);
