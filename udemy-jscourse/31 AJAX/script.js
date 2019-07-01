// AJAX (Asynchronous Javascript And Xml) – технология
// обращения к серверу без перезагрузки страницы.
// За счет этого уменьшается время отклика и
// веб-приложение по интерактивности больше напоминает десктоп.

let inputRub = document.getElementById("rub"),
  inputUsd = document.getElementById("usd");

inputRub.addEventListener("input", () => {
  let request = new XMLHttpRequest();

  // request.open(method, url, async, login, pass);
  /**
   * 5 аргументов:
   * 1) метод (н-р GET или POST) - метод, которым клиент общается с сервером
   * 2) путь к серверу (локальному, облачному)
   * 3) асинхронность запроса (по умолчанию true. Если поставить false, то по аналогии с alert - страница зависнет до ответа сервера)
   * 4) login - если необходимо
   * 5) pass - если необходимо
   */

  request.open(
    "GET",
    "currency.json"
    /**true стоит и так, login/pass не нужны */
  );
});

// 10:04
