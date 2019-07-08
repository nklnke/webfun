let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsById("budget-value"[0]),
  dayBudgetValue = document.getElementsById("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц", ""); // Унарный + в начале - чтобы строка преобразовывалась в число
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  // Проверка на то, что пользователь вводит числа
  // До тех пор, пока не будут введены числа, диалог будет повторяться
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,

  // Метод для объекта appData
  chooseExpenses: function() {
    for (i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

      if (
        typeof a === "string" && // Проверка на то, что а - строка
        typeof a != null && // Проверка на то, что а и б не пустые
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50 // Прооверка на то, что длина а < 50 символов
      ) {
        console.log("Всё верно");
        appData.expenses[a] = b; // Запись в expences вида "ответ на a : ответ на b"
      } else {
        i--;
      }
    }
  },

  // Бюджет на день
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    console.log("Ежедневный бюджет: " + appData.moneyPerDay);
  },

  // Уровень дохода
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("ОШИППКА");
    }
  },

  // Накопления с депозита
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Какой процент?");

      appData.monthIncome = (save / 100 / 12) * percent;
      console.log(`Доход в месяц с депозита: ${appData.monthIncome}`);
    }
  },

  // Необязательные расходы
  chooseOptExpences: function() {
    for (let i = 1; i < 3; i++) {
      let opt = prompt("Необязательные расходы:", "");

      appData.optionalExpenses[i] = opt;
    }
  },

  // Доп. доходы
  chooseIncome: function() {
    let items = prompt("Что принесёт дополнительный доход? (через запятую)", "");

    appData.income = items.split(", ");
    appData.income.push(prompt("Что-то ещё?"));
    appData.income.sort(); // Сортировка по алфавиту
  }
};
