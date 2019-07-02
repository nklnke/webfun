// localstorage - свойство window

// ~5mb помещается

// Инструменты разработчика - вкладка Application/local Storage

console.log(window);

localStorage.setItem("number", 1);
// Если ключ существует, то он перезапишется
localStorage.setItem("number", 666);
localStorage.setItem("huyamber", 777);

console.log(localStorage.getItem("number"));
console.log(localStorage.getItem("huyamber"));

localStorage.removeItem("number");

// localStorage.clear();

// 06:20
