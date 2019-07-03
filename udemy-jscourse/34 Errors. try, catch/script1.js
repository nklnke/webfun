let json = '{"id": 2}';

try {
  let user = JSON.parse(json); // catch не выполнится
  // let user = JSON.parse(json1); // catch выполнится
  console.log(user);

  if (!user.name) {
    // если в объекте user нет name
    throw new Error("в данных нет name");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);

  console.log(`***ERROR*** ${error.name}`);
} finally {
  // finally выполнится всегда
  console.log("finally выполнится всегда");
}

console.log("sasai");
