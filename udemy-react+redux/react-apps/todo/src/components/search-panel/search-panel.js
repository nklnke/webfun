import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    searchStroke: ""
  };

  onSearchChange = event => {
    // Получаем текущее значение инпута
    const searchStroke = event.target.value;
    this.setState({ searchStroke });

    // event listener, который передаёт в App
    this.props.onSearchChange(searchStroke);
  };

  render() {
    const searchText = "Type here to search";

    return (
      <input
        className="search-panel form-control search-input"
        type="text"
        placeholder={searchText}
        value={this.state.searchStroke}
        onChange={this.onSearchChange}
      />
    );
  }
}
