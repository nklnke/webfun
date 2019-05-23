// Сделайте функцию inArray, которая определяет, есть
// в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента,
// а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false.

var mass = ["сика", "кака", "писька", "срака"];

function inArray(text, massive) {
  for (let i = 0; i < massive.length; i++) {
    if (massive[i] == text) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(inArray("кака", mass));

// Хуй знает, кароч. Завтра.

// var stroke = "сика кака писька cрака";

// function inArray(text, massive) {
//   let newMassive = massive.split(" ");
//   console.log(newMassive);
//   for (let i = 0; i < newMassive.length; i++) {
//     if (newMassive[i] == text) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   newMassive = newMassive.join(" ");
//   console.log(newMassive);
// }

// console.log(inArray("кака", stroke));
