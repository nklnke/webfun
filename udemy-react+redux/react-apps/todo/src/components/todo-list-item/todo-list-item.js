import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  // Внутреннее состояние компонента хранится в поле state
  state = {
    done: false,
    important: false
  };


  // Item-done function
  // В функции получаем текущий стейт (деструктурируя сразу же,
  // не !state.important, а { important })
  // и возвращаем обратный ему
  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  // Item-important function
  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    // У класса пропсы не принимаются, а хранятся в this.props
    const { label, onDelete } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";

    if (done) {
      // Следить за пробелом перед классом, иначе будет class="importantdone"
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
