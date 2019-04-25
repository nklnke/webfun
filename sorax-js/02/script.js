// Числа

console.log(5);
console.log(0);
console.log(300000);
console.log(0xfffcc);
console.log(0Xbbbccc);
console.log(0345); // если начинается с 0, то число воспринимается, как восьмеричное
//console.log(01238); // если есть цифра больше 7, то считается десятичным

var N = new Number(4000); // конструктор объекта
var n = 5000; // переменная простого типа

console.log('');
console.log(typeof N);
console.log(typeof n);

console.log('');
console.log(N.toFixed(7));
console.log(n.toFixed(7));
console.log(5 .toFixed(7)); // перед точкой пробел, т.к. без него парсер будет считать, что идёт число 5.**** и будет ждать продолжения дробной части

// 

console.log('');
console.log(n.toExponential(4));
console.log(n.toPrecision(8));

var n = 12.67;

console.log('');
console.log(n.toExponential(4));
console.log(n.toPrecision(8));

// Арифиметические операторы

// Унарные

console.log('');
console.log(+10); // Унарный +
console.log(-10); // Унарный -

console.log('');
var i = 10;
console.log(++i); // Инкеремент префиксный (сначала изменяет значение переменной, потом возвращает её)
console.log(--i); // Декремент префиксный
console.log(i++); // Инкеремент постфиксный (сначала возвращает переменную, потом изменяет её значение)
console.log(i--); // Декремент постфиксный

// Бинарные

console.log('');
console.log(5 + 7);
console.log(5 - 7);
console.log(5 / 7);
console.log(7 % 5); // Остаток от деления

// Операторы присваивания

console.log('');
i += 7; // i = i + 7
i *= 2; // i = i * 2

// Операторы отношения

console.log(5 > 10);
console.log(5 >= 10);
console.log(5 < 10);
console.log(5 <= 10);
console.log(5 === 5); // Оператор равенства
console.log(5 !== 5); // Оператор неравенства

// Объект Math

console.log('');
console.log(Math.sqrt(36)); // Квадратный корень
console.log(Math.pow(3,5)); // Возведение 3 в 5 степень
console.log(Math.PI);
console.log(Math.E);

// Ошибки округления

console.log('');
console.log(.2 + .1);
console.log(10000000000000008 + 10000000000000001);
