var paragraph = document.getElementsByTagName("p");

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].addEventListener("click", function() {
    paragraph[i].innerHTML = Math.pow(paragraph[i].innerHTML, 2);
  });
}
