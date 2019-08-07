import React from "react";
import "./App.css";
import Car from "./Car/Car";

function App() {
  const divStyle = {
    textAlign: "center"
  };

  // Можно возвращать только один корневой элемент
  return (
    <div style={divStyle}>
      <h1>Cars</h1>

      <Car name={"Ford"} year={2018} />

      <Car name="Audi" year={3551} />

      <Car name={"Herauyord"} year={1989} />
    </div>
  );
}

export default App;
