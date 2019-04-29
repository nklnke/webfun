// callback-функции

var func = function(callback) {
  var name = "Cokes";
  callback(name);
};

func(function(n) {
  console.log("Hello " + n);
});

console.log("");

// Также функция может быть возвращаемым значением

var func = function() {
  return function() {
    console.log("Hi");
  };
};

func()();
