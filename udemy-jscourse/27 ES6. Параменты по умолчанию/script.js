// ES5

function calcOrDoubleES5(number, basis) {
  basis = basis || 2; // ES5. Если basis существует, то второй аргумент
  // равен ему. Если нет, то второй аргумент равен 2 и происходит
  // удвоение первого аргумента.

  console.log(number * basis);
}

calcOrDoubleES5(3, 5);
calcOrDoubleES5(6);

// ES6

function calcOrDoubleES6(number, basis = 2) {
  console.log(number * basis);
}

calcOrDoubleES6(3, 5);
calcOrDoubleES6(6);
