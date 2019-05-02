// Объекты

var person = {
  name: "Danil",
  age: 30,
  gender: "male",
  sayHi: function() { // Метод
    return "Hello";
  }
};

// выражение.идентификатор

console.log(person.name);
console.log(person.gender);

// выражение[выражение]

console.log(person["age"]);

// Можем изменять свойства объектов

person.age = 25;
person.userID = 311813336;

console.log(person);

console.log(person.sayHi());
