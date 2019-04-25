// Строки

console.log('');

console.log(true);
console.log(false);

console.log('');

console.log(5 === 5);
console.log(5 === 6);

console.log('');

console.log(Boolean(5));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));

console.log('');

var s = 'Text';

if (s) {
  console.log('Its true');
}

// Логические операторы

console.log(true && false); // Логическое И
console.log(true && true);
console.log(true || true);  // Логическое ИЛИ
console.log(false || false);
console.log(!true);  // Логическое Отрицание
console.log(!false);

console.log('');

var a = 0;
    isTrue = true;

isTrue && (a = 5);  // Пример применения: переменной a присваивеется значение 5 только
                    // в том случае, когда значение переменной isTrue истинно
console.log(a);

console.log('');

var someString = "NonEmptyString";
var newString = someString || "Default String";

console.log(newString);

console.log('');

// Null и undefined

var temp;
var obj = {};
console.log(temp); // Значение неинициализированной переменной - undefined
console.log(obj.property); // Несуществующее свойство у объекта - также undefined
console.log(a[4]); // Обращение к несуществующему элементу массива - undefined

console.log('');

function greet(name) {
  return "Hello " + name;
}

console.log(greet("Shtruaf"));
console.log(greet());

console.log("");

console.log(null == undefined);
console.log(null === undefined); // Имеют разные типы
