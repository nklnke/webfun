import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = () => {
  const items = ["Sraka", "Build pipoerdeppolo"];

  return (
    // Корнем jsx-фрагмента должен быть один элемент (один родитель)
    <ul>
      <li><TodoListItem /></li>
      <li>Build Sosew</li>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

export default TodoList;
