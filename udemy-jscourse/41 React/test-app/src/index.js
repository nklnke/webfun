import React from "react"; // Сам реакт, все его скрипты
import ReactDOM from "react-dom"; // ОТвечает за создание dom-элементов на странице
import "./index.css";
import Clock from "./App";
import Button from "./Button";
import * as serviceWorker from "./serviceWorker";

// App
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Clock />
        <Button />
      </div>
    );
  }
}

// Встраивание в страницу блока с id = root, huyt, ...
ReactDOM.render(<App />, document.getElementById("App"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
