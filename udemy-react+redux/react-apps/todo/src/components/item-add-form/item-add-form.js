import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLableChange = (event) => {
    this.setState({
      // Здесь можно добавить условия. Например, .toUpperCase(),
      // запрет символов, форматирование телефонов, карт, ...
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { onItemAdd } = this.props;
    onItemAdd(this.state.label);

    // Очистка value у инпута после добавления itemа
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLableChange}
          placeholder="Input new todo item"
          // value очищается после добавления itemа
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add item</button>
      </form>
    );
  }
}
