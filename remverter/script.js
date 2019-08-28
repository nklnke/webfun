function output(text) {
  let output = document.getElementById("output"),
    base = 16;

  output.innerHTML = text.value / base + "rem";
}

// циклом по таблице пройтись - от 8 до 50-60px
