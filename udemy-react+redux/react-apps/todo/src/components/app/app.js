import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form/item-add-form";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make app", important: false, id: 2 },
      { label: "Sasai", important: false, id: 3 }
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

  addItem = (text) => {
    // Generate id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    // Add item to list
    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      }
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

        <ItemAddForm onItemAdd={this.addItem} />
      </div>
    );
  }
}
