import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Work/rest alert
function ShowBanner(props) {
  if (props.time > 45) {
    return <div className="rest-block">Отдых</div>;
  } else {
    return <div className="work-block">Работать</div>;
  }
}

/** Timer
 * Сначала рендерится положение даты с текущим временем (вызывается метод render()).
 * Потом вызывается метод componentDidMount, с интервалом обновления, который
 * вызывает метод tick каждую секунду и дата обновляется.
 * componentWillUnmpunt очистит интервал, если таймер пропадёт со страницы.
 */

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />
        <h1>Current time: {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
