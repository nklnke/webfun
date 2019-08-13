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
    ],
    searchStroke: "",
    filter: 'all' // active, all или done
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

  search(items, searchStroke) {
    if (searchStroke.length === 0) {
      return items;
    }

    // Функция вернёт элементы, label которых содержит searchStroke
    return items.filter(item => {
      // indexOf вернёт 0 или больше, если строка есть, и -1, если её нет
      return item.label
        .toLowerCase()
        .indexOf(searchStroke.toLowerCase()) > -1;
    });
  }

  onSearchChange = searchStroke => {
    this.setState({ searchStroke });
  };

  filter(items, filter) {
    switch(filter) {
      case "all":
        return items;

      case "active":
        // Фильтр возвращает те элементы, которые не выполнены (!item.done)
        return items.filter(item => !item.done);

      case "done":
        return items.filter(item => item.done);

      default:
        return items;
    }
  }

  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    // Достаём значения из state
    const { todoData, searchStroke, filter } = this.state;

    const visibleItems = this.filter(
      this.search(todoData, searchStroke), filter);

    // Счётчик заданий (фильтр, который оставляет элементы, у которых done: true)
    const doneCount = todoData.filter(el => el.done).length,
      todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />

          {/* App передаёт ItemStstusFilter, какой элемент должен быть активен */}
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange} />
        </div>

        <TodoList
          // Передаём не все элементы, а только те, которые видимы (поиск, фильтры)
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onItemAdd={this.addItem} />
      </div>
    );
  }
}
