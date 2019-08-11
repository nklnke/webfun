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
      this.createTodoItem("Drink coffee"),
      this.createTodoItem("Make app"),
      this.createTodoItem("Sasai")
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      // Generate id
      id: this.maxId++
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      // Удаление элемента из массива
      // Получаем индекс удаляемого элемента
      // Ищем элемент с таким же id, какой получили при онклике по itemу
      const index = todoData.findIndex(el => el.id === id);

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

  addItem = text => {
    const newItem = this.createTodoItem(text);

    // Add item to list
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id);

    const oldItem = arr[index];
    // Все свойства как у старого элемента, кроме propName - оно противоположное
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    // Новый массив: item вырезан, вместо него newItem
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  render() {
    const { todoData } = this.state;

    // Счётчик заданий (фильтр, который оставляет элементы, у которых done: true)
    const doneCount = todoData.filter(el => el.done).length,
      todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onItemAdd={this.addItem} />
      </div>
    );
  }
}
