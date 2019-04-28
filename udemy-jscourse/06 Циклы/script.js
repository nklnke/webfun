// While

let num = 50;

while (num < 55) {
  console.log(num);
  num++;
}

console.log("");

// Do while

let num1 = 50;

do {
  console.log(num1);
  num1++;
} while (num1 < 55);

console.log("");

// For

for (i = 1; i < 8; i++) {
  if (i == 6) {   // досрочное
    break;        // прерывание
  }               // цикла
  console.log(i);
}

console.log("");

for (j = 1; j < 8; j++) {
  if (j == 6) {   // прерывание
    continue;     // одной итерации
  }               // цикла
  console.log(j);
}
