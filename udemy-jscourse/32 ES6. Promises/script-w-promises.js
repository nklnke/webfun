let drink = 0;

function shoot(arrow) {
  console.log("you shoot...");

  // resolve - состояние, при котором обещание выполнилось
  // reject - не выполнилось
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      Math.random() > 0.5 ? resolve({}) : reject("вы промахнулись");
    }, 1000);
  });

  return promise;
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

shoot({})
  .then(mark => console.log("вы попали в цель"))
  // .then(xxx => clg)
  // .then(xxx => {})
  // .then(xxx => func{})
  .then(win)
  .catch(loose);
// .then(???) - then после catch будет выполняться всегда;
