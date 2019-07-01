// ES6 отходит от конструкторов к классам.

// Каждый объект имеет прототип и наследует методы и свойства от своего прототипа.
// Можно создавать классы и от них плодить потомков со схожими характеристиками.

// Названия классов пишутся с большой буквы.

class Rectangle {
  constructor(height, width = 240) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square1 = new Rectangle(640, 480),
  square2 = new Rectangle(320);

console.log(square1.calcArea());
console.log(square2.calcArea());
