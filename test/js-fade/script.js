let elem = document.getElementById("fadeDiv").style,
  btnFade = document.getElementById("btnFade"),
  btnUnfade = document.getElementById("btnUnfade");

elem.opacity = 1;

btnFade.addEventListener("click", function fade() {
  (elem.opacity -= 0.1) == 0 ? (elem.display = "none") : setTimeout(fade, 40);
});

btnUnfade.addEventListener("click", function unFade() {
  (elem.opacity += 0.1) == 1 ? setTimeout(unFade, 40) : (elem.display = "block");
  // elem.display = "block";
  // elem.opacity += 0.1;
});
