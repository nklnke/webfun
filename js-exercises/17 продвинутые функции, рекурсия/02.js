// Дано число. Сложите его цифры.
// Если сумма получилась более 9-ти, опять сложите его цифры.
// И так, пока сумма не станет однозначным числом (9 и менее).

var num = 367,
  sum = 0;

function shazam(num) {
  let mass = num.toString().split("");
  console.log(mass);

  for (let i = 0; i < mass.length; i++) {
    sum += +mass[i];
    // или sum += Number(mass[i]);

    if (sum > 9) {
      sum -= +mass[i];
      return sum;
    }
  }
}

console.log(shazam(num));
