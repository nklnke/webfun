let timer = setTimeout(hello, 1000);

// clearTimeout(timer); // Остановка таймера

function hello() {
  console.log("hello 1sec");
}

let timer1 = setInterval(goodbye, 1000);

function goodbye() {
  console.log("GUDB I");
}

// 6:27
