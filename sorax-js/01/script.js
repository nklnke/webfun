// Простые типы данных

var myNum = 5758,
    myString = "Heil Satan",
    myBool = true,
    muNull = null,
    myUndef = undefined,
    anotherVar = 458,
    comma = ",";

console.log("Hello world.",
            myString + comma,
            "and may the force be with you");

console.log("");
console.log(typeof myNum);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndef);
console.log(typeof anotherVar);
console.log(typeof comma);

console.log("");
console.log("hello world".toUpperCase());

// Объектные типы данных

var obj = {name: "suka"},
    array = [1, 555, 666],  // массив
    regexp = /w+/g,
    func = function(){};

console.log("");
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);

// Переназначение переменных

console.log("");
console.log(array);
console.log(obj);

obj.name = "passive star";
array[0] = 0;

console.log("");
console.log(array);
console.log(obj);

console.log("");
console.log(myString.toUpperCase());
console.log(myString);
