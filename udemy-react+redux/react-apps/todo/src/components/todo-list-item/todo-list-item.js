import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    // У класса пропсы не принимаются, а хранятся в this.props
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important
    } = this.props;

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
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
