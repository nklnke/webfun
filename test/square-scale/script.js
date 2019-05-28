onresize = function() {
  var bodyWidth = document.documentElement.clientWidth,
    bodyHeight = document.documentElement.clientHeight,
    scalable = document.getElementsByClassName("scalable")[0]; // .getElementById("scalable")

  scale = Math.min(bodyWidth / 700, bodyHeight / 700);

  scalable.style.top = (bodyHeight - scalable.offsetHeight * scale) / 2 + "px";
  scalable.style.left = (bodyWidth - scalable.offsetWidth * scale) / 2 + "px";
  scalable.style.webkitTransform = "scale(" + scale + ")";
};

onresize();
