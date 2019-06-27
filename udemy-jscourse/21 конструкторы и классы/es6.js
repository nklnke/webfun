class User {
  // Конструктор - базовые значения класса
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }

  // Методы класса
  hello() {
    console.log("hello, ${this.name}");
  }

  exit() {
    console.log("user ${this.name} вышел");
  }
}

let ivan = new User("Ivan", 23),
  alex = new User("Alex", 23);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();
