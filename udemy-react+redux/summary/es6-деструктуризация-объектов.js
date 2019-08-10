// Позволяет лаконично достать значения из какой-либо структуры данных

const person = {
  name: {
    first: "Siker",
    last: "Sraker"
  },
  age: 30,
  role: "admin"
};

const {
  name: { first: firstName, last: lastName },
  age
} = person;

console.log(firstName, lastName, age);

// Можно добавить значения по умолчанию
const { role = "user" } = person;

console.log(role);

// Деструктуризация аргументов функции.
// (= {} в конце - объект по умолчанию пустой, чтобы
// можно было вызывать функцию без параметров)
function connect({ host = "localhost", port = 1111, user = "guest" } = {}) {
  console.log(`user: ${user}, port: ${port}, host: ${host}`);
}

connect({});
connect({ port: 666 });
connect();

// rest-элемент
const dict = {
  duck: "кря",
  dog: "гав",
  mouse: "пи"
};

// Записываем всё, кроме duck в otherAnimals
const { duck, ...otherAnimals } = dict;

console.log(duck);
console.log(otherAnimals);
