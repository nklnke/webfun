import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    // Деструктуризация (чтобы id не передавался в TodoListItem)
    const { id, ...itemProps } = item;

    return (
      <li key={item.id}>
        {/* <TodoListItem label={item.label} important={item.important} /> */}
        <TodoListItem {...itemProps} />
        {/* spread-оператор передаёт все свойства объекта в компонент */}
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default TodoList;
