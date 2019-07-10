// Дан инпут. В него вводится число. При потере фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.

var input = document.getElementById("input");

input.addEventListener("blur", function() {
  var mass = input.value.split("");

  for (let i = 0; i < mass.length; i++) {
    let cloneInput = document.createElement("input");

    cloneInput.value = mass[i];
    cloneInput.disabled = true;

    document.body.appendChild(cloneInput);
  }

  input.value = null;
});
