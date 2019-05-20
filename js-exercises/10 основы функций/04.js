// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function day($num) {
  if ($num == 1) {
    console.log("Пн");
  }
  if ($num == 2) {
    console.log("Вт");
  }
  if ($num == 3) {
    console.log("Ср");
  }
  if ($num == 4) {
    console.log("Чт");
  }
  if ($num == 5) {
    console.log("Пт");
  }
  if ($num == 6) {
    console.log("Сб");
  }
  if ($num == 7) {
    console.log("Вс");
  }
}

day(1);
