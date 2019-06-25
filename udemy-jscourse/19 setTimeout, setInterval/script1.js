let button = document.querySelector(".button"),
  elem = document.querySelector("#square");

function animate() {
  let position = 0;

  let timerId = setInterval(frame, 50);
  function frame() {
    // elem.innerHTML = "FDFDDF";
    if (position == 500) {
      clearInterval(timerId);
    } else {
      position++;
      elem.style.top = position + "px";
      elem.style.left = position + "px";
    }
  }
}

button.addEventListener("click", animate);
