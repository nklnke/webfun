// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

var mass = [1, 2, 3, 4, 5];

mass.splice(1, 0, "a", "b");

console.log(mass);

mass2 = mass.splice(3, 0, "c");

console.log(mass2);
