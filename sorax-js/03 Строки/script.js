// Строки

console.log('string');
console.log("string");

console.log('super "string"');

console.log('');
console.log('string'.length); // Длина строки

console.log('');
console.log('Super-super \
long string \
nahooy'); // Запись строки на нескольких строчках

// Управляющие конструкции

console.log('');
console.log('Super-super \nlong string \nnahooy'); // \n - new line
console.log('Super-super \n\tlong string \n\t\tnahooy'); // \t - табуляция
console.log('Super-super \"long string\" nahooy'); // \" - кавычки
console.log('Super-super \\long string\\ nahooy'); // \" - обратный слеш

// Конкатенация (склеивание строк)

console.log('');
var string = 'Hello';
console.log(string + ' world');

//Методы работы со строками

var string = 'Супер дупер шлюхострока';

console.log('');
console.log(string.charAt(0));
console.log(string.length);
console.log(string.substring(10));
console.log(string.substring(10,15));
console.log(string.slice(-10));
console.log(string.substr(14,4));
console.log(string.indexOf('ю'));
console.log(string.lastIndexOf('ю'));
console.log(string.replace('ю','хую'));
console.log(string.split('ю'));
console.log(string.toUpperCase());
console.log(string.toLowerCase());

console.log(string[0]); // Вместо .chatAt(0)
