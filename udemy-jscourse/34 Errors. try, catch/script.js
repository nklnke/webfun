/**
 * Задача - завершить скрипт при любом варианте развития.
 * Если в блоке try возникнет ошибка, то его выполнение
 * прервётся на том месте, где ошибка возникла,
 * и начнётся выполнение блока catch.
 * Это не ошибка браузера/консоли, и после try/catch
 * продолжится работа скрипта.
 */

try {
  console.log("sasai");
  console.log(a);
  console.log("sosew");
} catch (error) {
  console.log(`1 ${error}`);
  console.log(`2 ${error.name}`);
  console.log(`3 ${error.message}`);
  console.log(`4 ${error.stack}`); // Набор вызовов, которые привели к ошибке

  console.log(`***ERROR RECIEVED***: ${error.name}`);
}

console.log("alya ulyu");
