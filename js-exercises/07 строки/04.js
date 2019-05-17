// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

var stroke = "я учу javascript!";

console.log(stroke.substr(2, 3));
console.log(stroke.substring(2, 5));
console.log(stroke.slice(2, 5));
