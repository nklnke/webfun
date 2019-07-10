// Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.

var parent = document.querySelector("#parent"),
  child = document.querySelector("#child"),
  btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  parent.removeChild(child);
});

// Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.

var ol = document.getElementById("ol");

btn1.addEventListener("click", function() {
  ol.removeChild(ol.lastElementChild);
});

// Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.

var elem = document.getElementById("elem"),
  parent = elem.parentElement;

elem.addEventListener(function() {
  parent.removeChild(elem);
});

// or

elem.addEventListener("click", function() {
  this.parentElement.removeChild(this);
});

// Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.

var ol = document.getElementById("ol"),
  liList = ol.children;

for (let i = 0; i < liList.length; i++) {
  liList[i].addEventListener("click", function() {
    this.parentElement.removeChild(this);
    // liList[i].parentElement.removeChild(liList[i]);
  });
}
