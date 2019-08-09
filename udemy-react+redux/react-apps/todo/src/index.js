import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false },
    { label: "Make app", important: true },
    { label: "Sasai", important: false }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

// В рендер react принимает только компоненты (не элементы)
ReactDOM.render(<App />, document.getElementById("root"));
