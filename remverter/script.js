let baseValue = document.getElementById("baseValue");
let pxValue = document.getElementById("pxValue");
let output = document.getElementById("output");
let inputs = document.getElementsByTagName("input");
let pixelColumn = document.querySelectorAll("#pxToRemTable td:first-child");
let remColumn = document.querySelectorAll("#pxToRemTable td:nth-child(2)");

function createEventListeners() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", convertPxToRem);
    inputs[i].addEventListener("keyup", createPxToRemTable);
  }
  createPxToRemTable();
}

function convertPxToRem() {
  let rem = pxValue.value / baseValue.value;
  output.innerHTML = rem.toFixed(4) + "rem";
}

function zero(z) {}

function createPxToRemTable(n) {
  for (let i = 0; i < pixelColumn.length; i++) {
    pixelColumn[i].innerHTML = i;
  }
  for (let j = 0; j < remColumn.length; j++) {
    remColumn[j].innerHTML = j / baseValue.value + "rem";
  }
}

createEventListeners();
