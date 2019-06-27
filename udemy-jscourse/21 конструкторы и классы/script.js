// Функции-конструкторы предназначены для
// создания однотипных объектов (пользователи, товары, ролики, ...).
// return в них указывать не нужно.

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log("sasai, " + this.name);
  };
}

// Создание своего метода у функции
User.prototype.exit = function(name) {
  console.log("user " + this.name + " вышел");
};

let ivan = new User("Ivan", 25),
  alex = new User("Alex", 367);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();
