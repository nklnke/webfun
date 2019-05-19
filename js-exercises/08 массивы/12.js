// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

var mass = [1, 2, 3, 4, 5];

mass.splice(1, 0, "a", "b");
mass.splice(6, 0, "c");
mass.splice(8, 0, "e");

console.log(mass);
