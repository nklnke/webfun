var links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    links[i].title = links[i].innerHTML;
    links[i].innerHTML = `sasai ${i + 1}`;
  });
}
