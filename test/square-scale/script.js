onresize = function() {
  var bodyWidth = document.documentElement.clientWidth,
    bodyHeight = document.documentElement.clientHeight,
    scalable = document.getElementByClassName("scalable"); // .getElementById("scalable")

  scale = Math.min(bodyWidth / 700, bodyHeight / 500);

  scalable.style.top = (bodyHeight - scalable.offsetHeight * scale) / 2 + "px";
  scalable.style.left = (bodyWidth - scalable.offsetWidth * scale) / 2 + "px";
  scalable.style.webkitTransform = "scale(" + scale + ")";
};

onresize();

// Меняю выборку с "по ID" на "по классу" - и всё к хуям
