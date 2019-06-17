var array = [1, 3, 4, 6, 7];

// при помощи цикла for in получаем ключи массива, а не 0: 1, 1: 3, 2: 4, ...
for (let i in array) {
  console.log(i);
}

console.log("");

// при помощи цикла for of получаем значения массива, а не его ключи
for (let i of array) {
  console.log(i);
}

console.log("");
