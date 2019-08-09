import React from "react";
import ReactDOM from "react-dom";

// При импорте не обязательно указывать расширение .js
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

// В рендер react принимает только компоненты (не элементы)
ReactDOM.render(<App />, document.getElementById("root"));
