// for (инициализация; тест; инкремент) тело цикла

console.log("for");

var i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

console.log("лучше двигаться не от 0, а к нему");

var j; // лучше двигаться не от 0, а к нему
for (j = 10; j--;) {
  console.log(j);
}

// while (выражение) инструкция

console.log("while");

var k = 0;
while (k < 10) {
  console.log(k++); // для компактности инкремент можно записать, например, тут
}

// тут тоже лучше двигаться к 0

console.log("тут тоже лучше двигаться к 0");

var m = 10;
while (m--) {
  console.log(m);
}

// do инструкция while (выражение)

console.log("do while");

var z = 0;
do console.log(z++); while (z < 10)
