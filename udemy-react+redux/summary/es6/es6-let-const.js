// let, const

// let можно переназначить
let name = "sika";
name = "bob";

console.log(name);

// const нельзя переназначить
const pi = 3.14;
pi = 4; // error

// Но можно добавлять новые значения (н-р в массив)
const person = {
  name: "Sasai",
  age: 30
};

person.surName = "chlen popencev";

// Или изменять текущие значения
person.name = "Lalka";

person = "Herr"; // error
