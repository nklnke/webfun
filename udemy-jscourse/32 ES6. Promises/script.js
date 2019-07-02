// babel-polyfill - переводит промисы в код, понятный старым браузерам

// Часто нужно последовательное выполнение действий, которые выполняются только при срабатывании предыдущего

// callback-hell:
let func1 = function(param, func2) {
  func2(function(param, func3) {
    func3(function(param, func4) {
      func4(function(param, func5) {
        func5();
      });
    });
  });
};

///////////////////////////////

// Количество коллбэков увеличивается, код разрастается, короче пизда рулю

let drink = 0;

function shoot(arrow, headshot, fail) {
  console.log("you shoot...");

  setTimeout(function() {
    Math.random() > 0.5 ? headshot({}) : fail("вы промахнулись");
  }, 1000);
}

function win() {
  console.log("you win");
  drink == 1 ? buyBeer() : giveMoney();
}

function buyBeer() {
  console.log("вам купили пиво");
}

function giveMoney() {
  console.log("Вам дали деньги");
}

function lose() {
  console.log("you lose");
}

shoot(
  {},
  function(mark) {
    console.log("попали в цель");
    win(mark, buyBeer, giveMoney);
  },
  function(miss) {
    console.error(miss);
    lose();
  }
);
