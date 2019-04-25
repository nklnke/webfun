var name1 = 1; // Переменная видна в любом месте, всегда
let name2 = 2; // Переменная создаётся в момент обращения к ней
const pi = 3.14; // Константа, которую нельзя изменить

console.log(name1);
console.log(name2);
console.log(pi);

// Создание объекта

let persone = {
  name: "John",
  age: 23,
  isMarried: false
}

console.log(persone.name);
console.log(persone["name"]);

// Массивы

let arr = ["pic.png", "pic.jpg", "pic.png"];
console.log(arr[0]);
