// Функции-конструкторы предназначены для
// создания объектов и множества подобных копий.
// return в них указывать не нужно.

function User(name, id) { //
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log("sasai, " + this.name);
  };
}

let ivan = new User("Ivan", 25),
  alex = new User("Alex", 367);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

// 5:20
