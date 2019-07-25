// window.addEventListener("load", ...)
// Скрипт начнёт выполняться после того, как загрузится абсолютно всё

window.addEventListener("DOMContentLoaded", function() {
  // Скрипт начнёт выполняться сразу после загрудки дерева DOM, не дожидаясь, например, прогрузки картинок
  "use strict";

  let calculator = require("parts/calculator.js"),
    form = require("parts/feedback-form.js"),
    modal = require("parts/modal.js"),
    slider = require("parts/slider.js"),
    tabs = require("parts/tabs.js"),
    timer = require("parts/timer.js");

  calculator();
  form();
  modal();
  slider();
  tabs();
  timer();
});
