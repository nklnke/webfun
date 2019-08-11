import React from "react";

import TodoListItem from "../todo-list-item";

import "./todo-list.css";

const TodoList = ({ todos, onDelete }) => {
  const elements = todos.map(item => {
    // Деструктуризация (чтобы id не передавался в TodoListItem)
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        {/* spread-оператор передаёт все свойства объекта в компонент */}
        <TodoListItem {...itemProps} onDelete={() => onDelete(id)} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
