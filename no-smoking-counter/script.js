// начал с цены за пачку 115р
// цены на https://www.tabacum.ru/info/cigarette/brand/WINSTON

var lastTime = new Date("September 26, 2018"),
    currentDate = new Date(),
    noSmokingTime = (currentDate.getTime() - lastTime.getTime()) / (1000 * 60 * 60 * 24),
    cigCost = (115 + (107.25 + 143) / 2) / 2,
    savedMoney = noSmokingTime * cigCost;

console.log("Не курю " + Math.round(noSmokingTime) +" дней");

console.log("Сэкономил ~" + savedMoney.toFixed(2) + " руб.");

console.log("Сэкономил с учётом стартового дерьма ~" +
            (savedMoney - 2990 - 1990 - 390 * 2 - 100).toFixed(2) + " руб.");

console.log("Сэкономил с учётом жыжы ~" + (savedMoney -
            noSmokingTime / 30 * 500).toFixed(2) + " руб.");

console.log("Сэкономил с учётом жыжы и стартового дерьма ~" + (savedMoney -
            noSmokingTime / 30 * 500 - 2990 - 1990 - 390 * 2 -
            100).toFixed(2)) + " руб.";
