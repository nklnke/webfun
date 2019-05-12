// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

var num = 2,
  result;

switch (num) {
  case 1:
    result = "Зима";
    break;
  case 2:
    result = "Vesna";
    break;
  case 3:
    result = "Leto";
    break;
  case 4:
    result = "Ostn'";
    break;
}

console.log(result);
