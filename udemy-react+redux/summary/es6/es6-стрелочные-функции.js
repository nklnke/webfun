// es5
function square(x) {
  return x * x;
}

// es6
const sq = x => x * x;
// const sq = (x, y) => x * y;

console.log(sq(3)); // 9

//////////////////

const arr = ["1", "2", "3", "4"];

// Преобразование в числовой массив:
// map пробежится по значениям arr и создаст новый массив,
// заменяя элементы на то, что вернёт функция внутри map
const res = arr
  .map(element => parseInt(element))
  // Оставляем в массиве только нечётные числа:
  // filter пробежится по элементам массива, и те эл-ты, для которых
  // функция внутри filter вернёт true, останутся, а остальные
  // удалятся
  .filter(num => num % 2)
  // Ищем макс. значение массива:
  // reduce пробежится по оставшимся эл-там и выполнит для каждого
  // функцию, которая в неё передаётся
  .reduce((max, value) => Math.max(max, value), 0);

console.log(res);

//////////////////

const arr1 = ["1", "2", "3", "4"];

const sq1 = x => {
  // несколько строк - нужен return и {}
  return x * x;
};
