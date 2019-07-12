// Отделение, сокрытие функций программы от внешнего мира (от пользователя) - инкапсуляция.

function User(name, age) {
  this.name = name;

  // this.age = age;

  // У такого кода есть недостатки. Пользователь может поменять переменные:
  // user1.userAge = 25;
  // user1.name = "huila";

  let userAge = age;

  // Создаем геттер - метод для получения данных из объекта
  this.getAge = function() {
    return userAge;
  };

  // Создаём сеттер - чтобы устанавливать значения
  this.setAge = function(age) {
    // При задании значений сеттером можно проверить, что задаётся - число ли это, строка, и т.д.
    if (typeof age === "number" && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.log("SASAI ZNACHENIE");
    }
  };

  this.say = function() {
    console.log(`user name - ${this.name}, user age - ${this.userAge}`);
  };
}

let user1 = new User("sosel", 30);

console.log(user1.name);
console.log(user1.userAge);

user1.say();

console.log(user1.getAge());

user1.setAge("25");

user1.setAge(25);
console.log(`mne ne ${user1.getAge()} let`);
