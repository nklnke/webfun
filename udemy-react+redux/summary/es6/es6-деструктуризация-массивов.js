/* */

const fibonacci = [1, 1, 2, 3, 5, 8, 13];

const [a, b, c] = fibonacci;
console.log(a, b, c);

// Можно пропускать значения
const [, d, , e, f] = fibonacci;
console.log(d, e, f);

/* */

const line = [[10, 17], [14, 7]];

const [ [p1x, p1y], [p2x, p2y] ] = line;
console.log(p1x, p1y, p2x, p2y);

/* Параметры по умолчанию */

const peoples = ['siker', 'sraker'];

const [g, h, i = 'kaker'] = peoples;
console.log(g, h, i);

/* rest-элементы */

const peoples1 = ['sasa', 'srasra', 'kaka'];

const [j, ...others] = peoples1;
console.log(j, others);

/* Деструктуризация массива, когда функция
принимает его в качестве аргумента */

const dict = {
  duck: "кря",
  dog: "гав",
  mouse: "пи",
  hamster: "пи"
};

// Функция получает все ключи и значения объекта одновременно
const res = Object.entries(dict)
  // Фильтр по крику "пи"
  .filter(([key, value]) => value === "пи")
  // Достаём из массива только ключи (без криков)
  .map(([key]) => key);

console.log(res);

/* Посложнее пример */

const shape = {
  type: "segment",
  coordinates: {
    start: [10, 15],
    end: [17, 15]
  }
};

const { coordinates:
  { start: [startX, startY],
    end: [endX, endY] } } = shape;

console.log(startX, startY, endX, endY);
