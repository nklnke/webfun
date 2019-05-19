// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

var mass = [1, 2, 3, 4, 5],
  newMass = mass.splice(1, 3);

console.log(newMass);
