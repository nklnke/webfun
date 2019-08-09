import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    return (
      <li>
        {/* <TodoListItem label={item.label} important={item.important} /> */}
        <TodoListItem {...item} />
        {/* spread-оператор передаёт все свойства объекта в компонент */}
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default TodoList;
