// начал с цены за пачку 115р
// цены на https://www.tabacum.ru/info/cigarette/brand/WINSTON
// закончил 107.25-143.00

let lastTime = new Date("September 26, 2018"),
  currentDate = new Date(),
  noSmokingTime =
    (currentDate.getTime() - lastTime.getTime()) / (1000 * 60 * 60 * 24),
  cigCost = (115 + (107.25 + 143) / 2) / 2,
  startingCosts = 2990 + 1990 + 390 * 2 + 100,
  zhizhCosts = 500,
  tempedCosts = 650 + 200 + 270 + 690 + 200 + 200 + 250 + 250 + 100,
  savedMoney = noSmokingTime * cigCost * 1.25; // Модификатор на 1.15 пачки в день

console.log("Не курю " + Math.round(noSmokingTime) + " дней");
console.log("Не выкурено сигарет ~" + Math.round(noSmokingTime * 20 * 1.25)); // Модификатор на 1.15 пачки в день
console.log("Экономия только на сигах ~" + savedMoney.toFixed(2) + " руб.");
console.log("Стартовые расходы ~" + startingCosts.toFixed(2) + " руб.");
console.log("Расходы на жыжу в месяц ~" + zhizhCosts + " руб./мес.");
console.log("Расходы на всякую поебень ~" + tempedCosts.toFixed(2));
console.log(
  "Экономия общая ~" +
    (
      savedMoney -
      startingCosts -
      tempedCosts -
      zhizhCosts * (noSmokingTime / 30)
    ).toFixed(2) +
    " руб."
);
