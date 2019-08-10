import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  // Внутреннее состояние компонента хранится в поле state
  state = {
    done: false
  };

  // event listener через class fields:
  onLabelClick = () => {
    this.setState({
      done: true
    });
  };

  render() {
    // У класса пропсы не принимаются, а хранятся в this.props
    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = "todo-list-item";

    if (done) {
      classNames += " done";
    }

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
