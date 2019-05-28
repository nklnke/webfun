// Дан массив с числами. Выведите последовательно его элементы,
// используя рекурсию и не используя цикл.

var mass = [1, 2, 3, 4, 5, 6];

function print(mass) {
  console.log(mass[0]);

  mass.splice(0, 1);

  if (mass.length > 0) {
    print(mass);
  }
}

print(mass);
