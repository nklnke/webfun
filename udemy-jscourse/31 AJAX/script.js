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
  request.setRequestHeader("Content-type", "application/json", "charset=utf-8");
  request.send(); // request.send(body); body - тело запроса

  // Ответы, которые может прислать сервер
  // status - http-код ответа (404, 503, ...)
  // statusText - текстовое описание ответа от сервера (ok или not found)
  // responseText/response - текст ответа
  // readyState - текущее состояние запроса (5 штук)

  // Обработчик событий следит за изменением ответа от сервера, а конкретно за изменением его состояния (readyState)
  request.addEventListener("readystatechange", function() {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response); // Парсим ответ от сервера request.response, в котором JSON-данные

      inputUsd.value = inputRub.value / data.usd;
    } else {
      inputUsd.value = "SASAI";
    }
  });
});
