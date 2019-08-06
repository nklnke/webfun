import React from "react";

export default props => (
  // export default (props) => (
  <div
    style={{
      display: "inline-block",
      verticalAlign: "top",
      margin: "25px",
      marginTop: 0
    }}
  >
    <h3>Car name: {props.name}</h3>
    <p>
      Year: <strong>{props.year}</strong>
    </p>
    {props.children}
  </div>
);
