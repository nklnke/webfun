let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn = document.getElementsByTagName("button")[0],
  optionalExpensesBtn = document.getElementsByTagName("button")[1],
  countBtn = document.getElementsByTagName("button")[2],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelectorAll(".choose-income"),
  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector(".choose-sum"),
  percentValue = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

let money, time;

startBtn.addEventListener("click", function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц", ""); // Унарный + в начале - чтобы строка преобразовывалась в число

  // Проверка на то, что пользователь вводит числа
  // До тех пор, пока не будут введены числа, диалог будет повторяться
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц", "");
  }

  appData.budget = money;
  appData.timeData = time;

  budgetValue.textContent = money.toFixed(); // Доход
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

// Обязательные расходы
expensesBtn.addEventListener("click", function() {
  let sum = 0;

  for (i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if (
      typeof a === "string" && // Проверка на то, что а - строка
      typeof a != null && // Проверка на то, что а и б не пустые
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50 // Прооверка на то, что длина а < 50 символов
    ) {
      appData.expenses[a] = b; // Запись в expenses вида "ответ на a : ответ на b"

      sum += +b;
    } else {
      i = i--;
    }
  }

  expensesValue.textContent = sum;
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,

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
    let items = prompt(
      "Что принесёт дополнительный доход? (через запятую)",
      ""
    );

    appData.income = items.split(", ");
    appData.income.push(prompt("Что-то ещё?"));
    appData.income.sort(); // Сортировка по алфавиту
  }
};

// 19:10
