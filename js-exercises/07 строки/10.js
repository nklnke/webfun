// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

var date = "2025-12-31",
  newDate = date.split("-");

console.log(newDate[2] + "." + newDate[1] + "." + newDate[0]);
