let ul = document.querySelector("ul");
let btn = document.querySelector("button");

ul.addEventListener("click", addExMark);
btn.addEventListener("click", addNewListItem);

function addNewListItem() {
  let li = document.createElement("li");
  li.innerHTML = "new list item";
  ul.appendChild(li);
}

function addExMark() {
  event.target.innerHTML += "!";
}
