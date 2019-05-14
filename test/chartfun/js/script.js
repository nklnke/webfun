var lastTime = new Date("September 26, 2018"),
  currentDate = new Date(),
  noSmokingTime =
    (currentDate.getTime() - lastTime.getTime()) / (1000 * 60 * 60 * 24),
  cigCost = (115 + (107.25 + 143) / 2) / 2;

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales"],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 660],
    ["2016", 1030]
  ]);

  var options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 }
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("chart-div")
  );
  chart.draw(data, options);
}
