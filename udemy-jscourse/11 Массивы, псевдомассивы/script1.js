var array = ["first", 2, 3, "four", 5];

array.forEach(function(item, i, array) {
  console.log(i + ": " + item + " (массив: " + array[i] + ")");
});

console.log("");

// то же самое попроще:
array.forEach(function(item, i, array) {
  console.log(i + ": " + array[i]);
});
