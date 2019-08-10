// Внутреннее состояние компонента хранится в поле state
// this.state инициализируется в конструкторе или в теле класса
// После инициализации state нельзя изменить

state = {
  done: false
};

// setState() - функция, обновляющая state

onLabelClick = () => {
  this.setState({
    done: true
  });
};
