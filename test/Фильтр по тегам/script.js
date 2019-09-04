/*- Создаётся массив элементов с общим классом (all в данном случае)
  - Циклом создаётся массив баттонов с тегами
  - Циклом на каждый банно вешается onclick
  - В каждом таком onclick-е циклом ищутся элементы с классом из innerHTML баттона
  - Если класс есть, то элементу присваивается inline-block, если нет, то none
*/

let btnsContainer = document.getElementById("btnsContainer"),
  btns = btnsContainer.getElementsByTagName("button"),
  elements = document.getElementById("items");

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    let items = elements.getElementsByClassName("all");

    for (let j = 0; j < items.length; j++) {
      if (items[j].classList.contains(this.innerHTML)) {
        items[j].style.display = "inline-block";
      } else {
        items[j].style.display = "none";
      }
    }
  };
}
