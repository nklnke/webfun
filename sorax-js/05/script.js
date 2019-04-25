console.log("");

// Автоматическое преобразование типов

console.log(5 + "5");
console.log(typeof(5 + "5"));
console.log("5" * "4");
console.log(typeof("5" * "4"));
console.log("5" * "Hi");
console.log(typeof("5" * "Hi"));

console.log("");

// Явное преобразование типов

// Конструктор Number переводит любое значение в числовой тип
console.log(Number("555"));
console.log(typeof(Number("555")));

// Конструктор String переводит любое значение в строковый тип
console.log(String(555));
console.log(typeof(String(555)));

// Конструктор Boolean переводит любое значение в булевый тип
console.log(Boolean(1));
console.log(typeof(Boolean(1)));

console.log("");

// Более короткие записи

// Быстрое преобразование числа в логический тип
console.log(!!5);
console.log(!!0);

// Быстрое преобразование значения в строку
console.log(345 + "");
console.log(typeof(345 + ""));

// Быстрое преобразование в число (унарный плюс используем)
console.log(+"367");
console.log(typeof +"367");

// Метод .toString
var number = 22;
console.log(typeof number.toString());

console.log("");

console.log(typeof String(Infinity));
console.log(typeof String(NaN));
console.log(typeof +"");

console.log("");

console.log(!!"");  // Любые !!, кроме этих пяти, вернут истину true
console.log(!!NaN);
console.log(!!0);
console.log(!!null);
console.log(!!undefined);

console.log(!!"Hello");
console.log(!!67);


// parseInt и parseFloat

console.log("");

console.log(parseInt("4px"));
console.log(parseFloat("4px"));

console.log("");

console.log(+true);
console.log(+false);
