// Обработка исключений

// Свой error message

// var myError = new Error("Sosew Error Message");
// console.log(myError.name);
// console.log(myError.message);

// throw myError;

// console.log("");

// -----------

var calculate = function(n) {
  if (n > 10) throw new Error("n не должно быть больше 10, сука");
  return n + 10;
};

// calculate(20);

try {
  calculate(20);
} catch (e) {
  console.log("Нэможно выполнить: " + e.message);
}
