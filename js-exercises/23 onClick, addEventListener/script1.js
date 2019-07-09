var imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function() {
    console.log(imgs[i].src);
  });
}

// Или onClick
for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = func;
}

function func() {
  console.log(this.getAttribute("src"));
}
