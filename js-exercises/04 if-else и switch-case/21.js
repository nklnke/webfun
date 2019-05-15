// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

var stroke = "123456",
  sum1 = Number(stroke[0]) + Number(stroke[1]) + Number(stroke[2]),
  sum2 = Number(stroke[3]) + Number(stroke[4]) + Number(stroke[5]);

if (sum1 == sum2) {
  console.log("true");
  console.log("sum1 = " + sum1);
  console.log("sum2 = " + sum2);
} else {
  console.log("false");
  console.log("sum1 = " + sum1);
  console.log("sum2 = " + sum2);
}
