// Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

var obj = {
  js: ["jQuery", "Angular"],
  php: "Hello",
  css: "World"
};

console.log(obj.js[0]);
console.log(obj["js"][0]);
console.log(obj.php + " " + obj.css);
