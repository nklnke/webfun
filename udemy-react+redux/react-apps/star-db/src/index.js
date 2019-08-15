const getResource = async url => {
  // Ждём, пока результат промиса не станет доступен
  const responce = await fetch(url);
  const body = await responce.json();

  return body;
};

// Попроще

getResource("https://swapi.co/api/people/1").then(body => {
  console.log("got responce", body.status);
  console.log(body);
});

// То же самое, посложнее

fetch("https://swapi.co/api/people/1")
  .then(responce => {
    console.log("got responce", responce.status);
    return responce.json();
  })
  .then(body => {
    console.log(body);
  });
