// js переходит от конструкторов к классам.
// Названия классов пишутся с большой буквы.

// Можно использовать для создания новых
// пользователей, элементов интерфейса,
// модальных окон, товаров, роликов, ...

class Rectangle {
  constructor(height, width = 160) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(200/*, 200*/);

console.log(square.calcArea());

// ...