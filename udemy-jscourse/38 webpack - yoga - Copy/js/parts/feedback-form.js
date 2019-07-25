function feedbackForm() {
  // Форма обратной связи
  let message = {
    loading: "Loading...",
    success: "Thank you for sign up",
    failure: "Opps... Something went wrong"
  };

  let form = document.querySelector(".main-form"), // Modal form
    inputs = form.getElementsByTagName("input"),
    statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  // Обаботчик submit нужно весить не на button, а на всю форму
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяет перезагрузку страницы после отправки формы

    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php"); // Отправка данных на сервер
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8"); // Описание запроса на сервер, что он содержит данные, полученные из формы

    // Создаyние из данных формы структуры формата "ключ: значение"
    let formData = new FormData(form);

    // Преобразование данных формы в JSON формат
    let tempObj = {};
    formData.forEach(function(value, key) {
      tempObj[key] = value;
    });

    let json = JSON.stringify(tempObj);

    // console.log(tempObj);
    // console.log(json);

    request.send(json);

    // Оповещение пользователя о текущем состоянии запроса
    request.addEventListener("readystatechange", function() {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    // Очистка полей формы после отправки данных
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  });
}

module.exports = feedbackForm;
