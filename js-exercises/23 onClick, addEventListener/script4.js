var links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function func() {
    links[i].innerHTML += ` (${links[i].href})`;
    // this.innerHTML += ` (${this.href})`;

    links[i].removeEventListener("mouseover", func); // Тут надо обязательно аргументом указать функцию, от которо
  });
}
