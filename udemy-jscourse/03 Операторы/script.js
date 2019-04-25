console.log("1" + "- не число");
console.log(1 + "- не число"); // Всё равно получается строка при конкатенации
console.log(1 + +"- не число"); // Здесь унарный + перед строкой превращает её в NaN

let answer = +prompt("Есть ли вам 18", "Да"); // А здесь унарный + превращает строку в число

console.log(typeof(answer));

console.log("");

// Инкремент и декремент. Префиксные и постфиксные

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);
console.log(++incr);
console.log(--decr);

console.log("");

console.log("2" == 2); // Проверка на раветство
console.log("2" === 2); // Строгая проверка по типам данных

