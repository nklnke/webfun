import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  const items = ["Sraka", "Build pipoerdeppolo"];

  return (
    // Корнем jsx-фрагмента должен быть один элемент (один родитель)
    <ul>
      <li>Learn React</li>
      <li>Build Sosew</li>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "25px"
  };

  return (
    <input
      style={searchStyle}
      type="text"
      placeholder={searchText}
      autoComplete=""
      tabIndex=""
      className="class"
      htmlFor=""
      disabled
    />
  );
};

const App = () => {
  const isLoggedIn = false,
    loginBox = <b>Login</b>,
    welcomeBox = <span>Welcome Back</span>;

  return (
    <div>
      <span>{new Date().toString()}</span>
      <br />
      <AppHeader />
      <SearchPanel />
      <TodoList items={["Item 1", "Item 2"]} />
    </div>
  );
};

// В рендер react принимает только компоненты (не элементы)
ReactDOM.render(<App />, document.getElementById("root"));
