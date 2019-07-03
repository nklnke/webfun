/**
 * localstorage - свойство window
 * ~5mb помещается
 * Инструменты разработчика - вкладка Application/local Storage
 * Привязывается к домену
 */
console.log(window);

localStorage.setItem("number", 1);
// Если ключ существует, то он перезапишется
localStorage.setItem("number", 666);
localStorage.setItem("huyamber", 777);

console.log(localStorage.getItem("number"));
console.log(localStorage.getItem("huyamber"));

localStorage.removeItem("number");

// localStorage.clear();

//////////////////////////////////

window.addEventListener("DOMContentLoaded", function() {
  let checkbox = document.getElementById("remember-me"),
    change = document.getElementById("change"),
    form = document.getElementsByTagName("form")[0];

  /* Если один раз чекнуть remember me, то в local storage
   * записывается свойство ckecked = true, и при обновлении
   * страницы оно сохраняется.
   */
  if (localStorage.getItem("isChecked") === "true") {
    checkbox.checked = true;
  }

  checkbox.addEventListener("click", function() {
    localStorage.setItem("isChecked", true);
  });

  if (localStorage.getItem("bg") === "changed") {
    form.style.backgroundColor = "red"; // здесь, чтобы красный фон записывался в local storage
  }

  change.addEventListener("click", function() {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "red"; // здесь, чтобы сразу после клика менялся фон формы
  });
});

///////////////////////////////////////

// Запись своих данных local storage

let person = {
  name: "Alex",
  age: 25,
  tech: ["mobile", "notebook"]
};

let serializedPerson = JSON.stringify(person);

localStorage.setItem("Alex", serializedPerson);

console.log(JSON.parse(localStorage.getItem("Alex")));
