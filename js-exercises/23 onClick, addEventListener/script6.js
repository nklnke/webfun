var inputs = document.getElementsByTagName("input"),
  paragraph = document.getElementById("para");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", function func() {
    paragraph.innerHTML += `${inputs[i].value}, `;

    inputs[i].removeEventListener("blur", func);
  });

  // Хз, не работает проверка на "," в конце строки.
  // Видимо, из-за некрасивых входных данных lastChar(`${inputs[i].value}, `)

  // function lastChar(str) {
  //   let stroke = str;

  //   if (stroke.substr(-1) == ",") {
  //     stroke.slice(-1);
  //   }
  // }
}
