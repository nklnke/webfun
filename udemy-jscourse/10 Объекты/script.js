// Объекты

let options = {
  width: 1024,
  height: 1024,
  name: "test"
};

console.log(options.name);

options.bool = false;

options.colors = {
  border: "black",
  bg: "red"
};

delete options.bool;

console.log(options);

console.log("");

for (let i in options) {
  console.log("Свойство " + i + " имеет значение " + options[i]);
}

console.log("");

console.log(Object.keys(options).length);

console.log("");

console.log(options);
