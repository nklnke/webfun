// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(num) {
  if (num > 0 && num < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumberInRange(5));
