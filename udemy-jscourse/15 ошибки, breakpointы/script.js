// код просто для примера

function second() {
  console.log(2);
}

second();

function learnJS(language, callback) {
  console.log("Я учу " + language);
  callback();
}

learnJS("Javascript", function() {
  console.log("Я прошёл третий хуёк");
});
