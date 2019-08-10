import React from "react";

import TodoListItem from "../todo-list-item";

import "./todo-list.css";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    // Деструктуризация (чтобы id не передавался в TodoListItem)
    const { id, ...itemProps } = item;

    return (
      <li key={item.id} className="list-group-item">
        {/* spread-оператор передаёт все свойства объекта в компонент */}
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
