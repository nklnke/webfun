// Внутреннее состояние компонента хранится в поле state
// this.state инициализируется в конструкторе или в теле класса
// После инициализации state нельзя изменить

state = {
  done: false
};

// setState() - функция, обновляющая state

// Если новое состояние элемента не зависит от предыдущего, то можно
// использовать setState и передавать внутрь объект:

onLabelClick = () => {
  this.setState({
    done: true
  });
};

// Если новое состояние зависит от предыдущего (true-false,
// счётчик, ...), то внутрь функции передаётся ещё функция,
// которая будет вызвана, когда state будет готов (может
// измениться не сразу из-за асинхронности реакта):

// (в функции получаем текущий стейт (деструктурируя сразу же,
// не !state.important, а { important }) и возвращаем обратный ему)

onLabelClick = () => {
  this.setState(({ done }) => {
    return {
      done: !done
    };
  });
};

// Без деструктуризации:

onLabelClick = () => {
  this.setState((state) => {
    return {
      important: !state.important
    };
  });
};

// simple example

this.setState((state) => {
  return {
    count: state.count + 1
  }
});

// Удаление элемента из массива:

// (setState() не должен изменять текущий state, нельзя ипользовать
// методы, которые изменяют (mutate) текущий массив)

// Получаем индекс удаляемого элемента, ищем элемент с таким же
// id, какой получили при онклике по itemу

const index = todoData.findIndex((el) => el.id === id);

newArr = [...oldArr.slice(0, index),
		  ...oldArr.slice(index + 1)];
