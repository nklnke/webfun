// Mocha - основа. Нужна, чтобы тесты работали.
// Chai - дополнение к моке, которые добавляет тесты для проверок в трёх стилях.

// Test func 1
function sayName(name) {
  let message = `My name is ${name}`;
  return message;
}

// Test func 2
let arr = [5, -3, 6, -5, 0, -7, 8, 9], // 13
  res = arr.reduce(function(sum, elem) {
    return sum + elem;
  });

// Testing
let assert = require("chai").assert; // assert - один из стилей тестирования

describe("sayName", function() {
  it("Получаем фразу с новым именем", function() {
    assert.typeOf(sayName("Ivan"), "string");
  });
});

describe("arr", function() {
  it("Получаем сумму элементов массива", function() {
    assert.equal(res, 12);
  });
});

// 11: 40
