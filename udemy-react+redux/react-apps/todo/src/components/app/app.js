import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", id: 1 },
      { label: "Make app", id: 2 },
      { label: "Sasai", id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      // Удаление элемента из массива
      // Получаем индекс удаляемого элемента
      // Ищем элемент с таким же id, какой получили при онклике по itemу
      const index = todoData.findIndex((el) => el.id === id);

      // Т.к. стейты в реакте изменять нельзя, создаём новый массив
      // без удаляемого элемента
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      // Возвращаем новое состояние
      return {
        todoData: newArray
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDelete={this.deleteItem} />
      </div>
    );
  }
}
