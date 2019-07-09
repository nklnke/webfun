var inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", function() {
    if (inputs[i].dataset.length == inputs[i].value.length) {
      this.style.backgroundColor = "green";
    } else {
      this.style.backgroundColor = "red";
    }
  });
}
