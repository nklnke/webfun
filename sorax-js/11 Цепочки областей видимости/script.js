// Цепочки областей видимости

var i = 5; // Глобальная переменная

var func = function() { // Локальная
  var i = 10;
  console.log(i); // Локальная переменная с таким же именем, что и глобальная, имеет больший приоритет
  var innerFunc = function() {
    var i = 15;
    console.log(i);
  };
  innerFunc();
};

func();

