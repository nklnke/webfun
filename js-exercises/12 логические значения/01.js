// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function eq(a, b) {
  if (a == b) {
    console.log(a + " = " + b);
  } else {
    console.log(a + " != " + b);
  }
}

eq(4, 21);
