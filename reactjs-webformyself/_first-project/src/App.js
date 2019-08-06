import React from "react";
import "./App.css";
import Car from "./Car/Car";

function App() {
  // Можно возвращать только один корневой элемент
  const divStyle = {
    textAlign: "center"
  };

  return (
    <div style={divStyle}>
      <h1>Cars</h1>

      <Car name={"Ford"} year={2018}>
        <p style={{ color: "blue" }}>Color</p>
      </Car>

      <Car name="Audi" year={3551}>
        <p style={{ color: "red" }}>Color</p>
      </Car>

      <Car name={"Herauyord"} year={1989} />
    </div>
  );
}

export default App;
