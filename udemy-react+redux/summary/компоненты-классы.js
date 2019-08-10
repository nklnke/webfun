// Классы используются, когда нужно хранить состояние (фильтры, счётчики, ...)
// Наследуют React.Component
// Метод render() возвращает элемент
// У класса пропсы не принимаются, а хранятся в this.props

import React, { Component } from "react";

import "./###.css";

export default class ClassName extends Component {
  render() {
    const { props1, props2 = false } = this.props;

    return (
      return
    );
  }
}
