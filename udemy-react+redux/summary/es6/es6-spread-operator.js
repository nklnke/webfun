// rest параметр собирает элементы в массив,
// spread раскладывает массив на список независимых элементов

const array1 = [1, 2, 3];
const array2 = [4, 7, 1];

const result1 = Math.max(...array1);
const result2 = Math.max(...array1, ...array2);
const result3 = Math.max(555, ...array1, 666, ...array2, 777);

console.log(result1);
console.log(result2);
console.log(result3);

// shallow-копия (поверхностная) массива

const shallowCopy = [...array1, ...array2, 6];

console.log(shallowCopy);
