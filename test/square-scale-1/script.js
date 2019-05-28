var maxWidth = $(".outer").width(),
  maxHeight = $(".outer").height();

$(window).resize(function(evt) {
  var $window = $(window),
    width = $window.width(),
    height = $window.height(),
    scale;

  // early exit
  if (width >= maxWidth && height >= maxHeight) {
    $(".outer").css({ "-webkit-transform": "" });
    return;
  }

  scale = Math.min(width / maxWidth, height / maxHeight);

  $(".outer").css({ "-webkit-transform": "scale(" + scale + ")" });
});
