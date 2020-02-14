let table = document.querySelector("table");
let nameInput = document.querySelector("input[placeholder = 'name']");
let surnameInput = document.querySelector("input[placeholder = 'surname']");
let submitBtn = document.querySelector("input[type='submit'");

submitBtn.addEventListener("click", addNewUser);
table.addEventListener("click", changeUser);

function addNewUser() {
  let tr = document.createElement("tr");
  let tdName = document.createElement("td");
  let tdSurname = document.createElement("td");

  table.appendChild(tr);
  table.appendChild(tdName);
  table.appendChild(tdSurname);

  tdName.innerHTML = nameInput.value;
  tdSurname.innerHTML = surnameInput.value;
}

function changeUser() {
  let newData = prompt("enter new data for this user:");
  event.target.innerHTML = newData;
}
