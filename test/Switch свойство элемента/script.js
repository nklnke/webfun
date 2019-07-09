var divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {
  // Не забывать про [i] !!!!!!!
  divs[i].addEventListener("click", paintRed);
}

function paintRed() {
  this.style.background = "red";

  this.removeEventListener("click", paintRed);
  this.addEventListener("click", paintGreen);
}

function paintGreen() {
  this.style.background = "green";

  this.removeEventListener("click", paintGreen);
  this.addEventListener("click", paintRed);
}
