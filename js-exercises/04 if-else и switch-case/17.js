// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

var month = 7,
  season;

if (month == 12 || month <= 2) {
  season = "zima";
}

if (month > 3 && month <= 5) {
  season = "vesna";
}

if (month > 6 && month <= 8) {
  season = "leto";
}

if (month >= 9 && month <= 11) {
  season = "vesna";
}
