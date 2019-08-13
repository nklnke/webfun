import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];

  render() {
    // Достаём значения из state
    const { filter, onFilterChange } = this.props;

    //  Проходимся по массиву и для каждого элемента создаётся своя кнопка
    // (активна/неактивна, добавляются нужные css классы)
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const buttonClass = isActive ? "btn-info" : "btn-outline-secondary";

      return (
        <button
          type="button"
          className={`btn ${buttonClass}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="item-status-filter btn-group">{buttons}</div>;
  }
}
