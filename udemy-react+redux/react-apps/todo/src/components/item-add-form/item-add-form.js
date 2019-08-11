import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };
  
  onLableChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };
  
  onSubmit = (event) => {
    event.preventDefault();

    const { onItemAdd } = this.props;
    onItemAdd(this.state.label);
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLableChange}
          placeholder="Input new todo item"
        />
        <button className="btn btn-outline-secondary">Add item</button>
      </form>
    );
  }
}
