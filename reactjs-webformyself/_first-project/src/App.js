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
      <h1>Hello World</h1>
      <p>Hello</p>

      <Car />
    </div>
  );
}

export default App;
