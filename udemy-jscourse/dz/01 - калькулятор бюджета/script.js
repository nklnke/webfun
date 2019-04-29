let money = prompt("Ваш бюджет на месяц"),
  time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

for (i = 0; i < 2; i++) {
  let answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдется?");
}

alert(appData.budget / 30);
