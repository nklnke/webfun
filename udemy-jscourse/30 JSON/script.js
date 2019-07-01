// JSON (javascript object notation) - формат передачи данных.

// Набор пар "ключ: значение".

// За счёт  лаконичности уместен в задачах обмена данными
// как между обозревателем и сервером (AJAX), так и между
// самими серверами.

let options = {
  width: 1366,
  height: 768,
  background: "red",
  font: {
    size: "16px",
    color: "white"
  }
};

// Преобразование строки в JSON формат, например,
// для отправки данных на сервер.
console.log(JSON.stringify(options));

// Метод .parse разбирает строку JSON в  js-объект/массив/значение.
console.log(JSON.parse(JSON.stringify(options)));
