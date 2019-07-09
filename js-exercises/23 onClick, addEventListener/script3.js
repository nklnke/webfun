var links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    links[i].innerHTML += ` (${links[i].href})`;
  });
}
