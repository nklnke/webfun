import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    const { onItemAdd } = this.props;

    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onItemAdd("Hello")}
        >
          Add item
        </button>
      </div>
    );
  }
}
