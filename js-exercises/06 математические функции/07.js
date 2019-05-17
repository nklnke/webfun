// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

var a = Math.sqrt(587),
  b = Math.ceil(a),
  c = Math.floor(a),
  obj = {};

obj = { First: a, Second: b, Third: c };

console.log(obj);
