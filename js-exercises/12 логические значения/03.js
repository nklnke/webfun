// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.

function num(a) {
  if (a < 0) {
    console.log(a + " < 0");
  } else {
    console.log(a + " >= 0");
  }
}

num(-5);
