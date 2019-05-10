// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

var test = true;

if (test != true) {
  console.log("true!");
} else {
  console.log("false!");
}

if (!test) {
  console.log("true!");
} else {
  console.log("false!");
}
