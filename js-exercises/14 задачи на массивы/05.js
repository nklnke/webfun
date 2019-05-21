// Дан массив с числами. Не используя метода reverse,
// переверните его элементы в обратном порядке.

var mass = [1, 2, 3, 4, 5],
  newMass = [];

for (let i = mass.length - 1; i >= 0; i--) {
  newMass.push(mass[i]);
}

console.log(newMass);
