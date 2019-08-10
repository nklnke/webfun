import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

import "./index.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make app", important: true, id: 2 },
    { label: "Sasai", important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

// В рендер react принимает только компоненты (не элементы)
ReactDOM.render(<App />, document.getElementById("root"));
