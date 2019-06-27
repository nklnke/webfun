function count(number) {
  return this * number;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(14));
console.log(double(0.6));
