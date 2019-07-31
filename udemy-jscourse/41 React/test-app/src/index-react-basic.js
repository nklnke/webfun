import React from "react"; // Сам реакт, все его скрипты
import ReactDOM from "react-dom"; // ОТвечает за создание dom-элементов на странице
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// Hello World 1
function Greetings1() {
  let phrase1 = "World";

  /* Внутри {} всегда строка */
  return <h1>Hello {phrase1}</h1>;
}

// Hello World 2
function Greetings2() {
  return <h2>{367 + 3}</h2>;
}

// Hello World 3
function Greetings3(props) {
  return (
    <h3>
      Hello {props.name}. My name is {props.anotherName}.
    </h3>
  );
}

// Hello World 4
const element = <Greetings4 phrase="SASAI LALKA" />;

function Greetings4(props) {
  return <h3>{props.phrase}.</h3>;
}

// Hello World 5
function GreetAll() {
  return (
    <div>
      <hr />
      <Greetings4 phrase="SASAI LALKA" />
      <Greetings4 phrase="LALKA SASAI" />
      <Greetings4 phrase="SASAI HUYALKA" />
      <Greetings4 phrase="HUYALKA SASAI" />
    </div>
  );
}

// Встраивание в страницу блока с id = root, huyt, ...
ReactDOM.render(<Greetings1 />, document.getElementById("root"));
ReactDOM.render(<Greetings2 />, document.getElementById("huyt"));
ReactDOM.render(
  <Greetings3 name="Kokes" anotherName="Sasaer" />,
  document.getElementById("third")
);
ReactDOM.render(element, document.getElementById("sasailalka"));
ReactDOM.render(<GreetAll />, document.getElementById("GreetAll"));
ReactDOM.render(<App />, document.getElementById("App"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
