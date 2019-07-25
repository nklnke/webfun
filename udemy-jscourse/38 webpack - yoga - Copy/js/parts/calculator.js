function calculator() {
  // Calculator
  let persons = document.querySelectorAll(".counter-block-input")[0],
    restDays = document.querySelectorAll(".counter-block-input")[1],
    place = document.getElementById("select"),
    totalValue = document.getElementById("total");

  let personSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;

  // Кол-во человек
  persons.addEventListener("change", function() {
    personSum = +this.value;
    total = (daysSum + personSum) * 4000;

    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  // Кол-во дней
  restDays.addEventListener("change", function() {
    daysSum = +this.value;
    total = (daysSum + personSum) * 4000;

    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  // Место отдыха
  place.addEventListener("change", function() {
    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      let a = total;

      // В зависимости от выбранного дропдауна меняется коэффициент
      // (берётся из <option id="mumbai" value="1">Индия, Мумбай</option>)
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calculator;
