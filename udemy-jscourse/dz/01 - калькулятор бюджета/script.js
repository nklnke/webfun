let money = +prompt("Ваш бюджет на месяц", ""), // Унарный + в начале - чтобы строка преобразовывалась в число
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");

  if (
    typeof a === "string" && // Проверка на то, что а - строка
    typeof a != null && // Проверка на то, что а и б не пустые
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50 // Проверка на то, что длина а < 50 символов
  ) {
    console.log("done");
    appData.expenses[a] = b; // Запись в expences вида "ответ на a : ответ на b"
  } else {
    //
  }
}

appData.moneyPerDay = appData.budget / 30;

console.log("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("ОШИППКА");
}
