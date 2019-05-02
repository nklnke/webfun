// this и непрямой вызов методов

var greet = function(greeting) {
  return greeting + ". My name is " + this.name; // Ключевое слово для обращения к текущему оъекту, внутри которого определяем метод
};

var person = {
  name: "Danil",
  greet: greet
};

var anotherPerson = {
  name: "Cokes",
  greet: greet
};

console.log(person.greet("Hi"));
console.log(anotherPerson.greet("Hi"));
console.log(anotherPerson.greet.call(person, "Hi"));
console.log(anotherPerson.greet.call(person, "Bonjour"));
console.log(anotherPerson.greet.apply(person, ["Bonjour"])); // То же самое, что call

var bound = greet.bind(anotherPerson); // Метод bound не вызывает функцию, а прост освязывает её с каким-то объектом
// чтобы, когда она вызывается, ключевое слово this указывало на тот объект,
// с которым она была связана
console.log(bound("Hello there"));

// Метод bind не изменяет исходную функцию, а возвращает новую
