// Ещё способы создания объектов

// Создание объекта и навешивание на него свойств

var object1 = new Object();
object1.svoystvo = "значение";
console.log(object1);

// Через create

var object2 = Object.create({ x: 10, y: 20 });
console.log(object2);

// Удаление свойств

delete object2.y;

// Проверка наличия свойства у объекта

console.log("x" in object1);
console.log("xpeH" in object1);
console.log(object1.x); // Обращение
console.log(object1.xpeH);
