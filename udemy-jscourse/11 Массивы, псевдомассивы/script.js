var array = [1, 2, 3, 4, 5];

console.log(array);

array.pop(); // удаляет последний элемент массива

console.log(array);

array.push("5"); // добавляет элемент в конец массива
array.shift(); // удаляет первый элемент
array.unshift("1"); // добавляет эл-т в начало

console.log(array);

// array[10] = "значение массива под номером 10";
// указывать строго номер строки нельзя

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
