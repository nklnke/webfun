// Аксессоры и атрибуты свойств

var person = {
  name: "Danil",
  _age: 30,
  get age() { // Геттер
   return this._age;
  },
  set age(value) { // Сеттер
    this._age = value < 0 ? 0 : value > 122 ? 122 : value;
  }
};

person.age = 180;
console.log(person.age);
person.age = -80;
console.log(person.age);
person.age = 34;
console.log(person.age);
