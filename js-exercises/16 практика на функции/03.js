// Сделайте функцию inArray, которая определяет, есть
// в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента,
// а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false.

// var mass = ["сика", "кака", "писька", "срака"];

// function inArray(text, massive) {
//   for (let i = 0; i < massive.length; i++) {
//     if (massive[i] == text) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(inArray("кака", mass));

// Короче, ошибка была в том, что не надо было сразу возвращать true или false,
// а сначала записывать это в переменную, и уже после всех проверок for if
// в конце функции возвращать эту переменную

var mass = ["функция", "первым", "массив", "в"];

function inArray(find, where) {
  var result;
  for (let i = 0; i < where.length; i++) {
    if (where[i] == find) {
      result = true;
    }
  }

  if (result == undefined) {
    // если текст перебран и искомое не найдено (не присвоено res=true)
    result = false;
  }

  return result;
}

console.log(inArray("первым", mass));
