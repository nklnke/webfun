var sample = [1, 2, 3, 4, 5];

/* 1) forEach()
* Для каждого элемента в массиве вызывается callback-функция,
* которая берёт элемент и его индекс, предоставляемый forEach.
*
* Обычно forEach работает как традиционный цикл, проходящий
* через весь массив элементов, чтобы сделать с ними
* какие-либо операции.
*/

sample.forEach((elem, index) => `${elem} comes at ${index}`);

// => 1 comes at 0
//    2 comes at 1
//    3 comes at 2
//    4 comes at 3
//    5 comes at 4



/* 2) filter()
* Выполняет callback-функцию и проверяет возвращаемое значение.
* Если оно верное, то оно будет положено в новый массив,
* если нет, то оно будет из него исключено.
* Не трогает существующий массив.
*/

var result = sample.filter(elem => elem !== 2);

// => [1, 3, 4, 5]



/* 3) map()
* Берёт callback-функцию и пускает её по всем элементам массива,
* генерирует новый массив, основываясь на существующем.
* 
* Проходится по каждому элементу в массиве, выполняя с ними действия,
* и возвращает элементы, которые будут положены в новый массив.
*/

let mapped = sample.map(elem => elem * 10);

// => [10, 20, 30, 40, 50]



/* 4) reduce()
* Применяет функцию callback по очереди к каждому элементу массива
* слева направо, сохраняя при этом промежуточный результат.
* 
*/

// Сумма всех элементов массива

// Для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

// => 15