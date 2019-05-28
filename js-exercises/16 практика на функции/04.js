// Дана строка, например, '123456'. Сделайте из нее '214365'.

var stroke = "123456";

function slicer() {
  let mass = stroke.split(""), // Не забывать, бл, про кавычки в сплите ("") !
    newMass = [];

  for (let i = 0; i < mass.length; i += 2) {
    let temp = mass.slice(i, i + 2).reverse(); // маленький массив из след. 2х элеметов, поменянных местами
    newMass = newMass.concat(temp); // push() тут не подходит
  }

  stroke = newMass.join("");
  return stroke;
}

console.log(slicer(stroke));
