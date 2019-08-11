// onChange() обновляет state, а state обновляет value элемента
// state - единственный источник значений
// Легко обновлять value. Можно обновлять не только в ответ на ввод пользователя

onSubmit = (event) => {
  const { onItemAdd } = this.props;
  onItemAdd(this.state.label);

  // Очистка value у инпута после добавления itemа
  this.setState({
    label: ""
  });
};

<input
  // value очищается после добавления itemа
  value={this.state.label}
/>
