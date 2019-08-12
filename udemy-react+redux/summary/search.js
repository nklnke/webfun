// Компонент App получает новый элемент state, в котором
// хранится строка поиска

// Перед рендером элементов в render() отфильтровываются ненужные

// Комонент SearchPanel генерирует событие onSearchChange на каждое
// нажатие клавиши (чтобы App обновлял список)

/**********/
/* App.js */
/**********/

// ...

search(items, searchStroke) {
  if (searchStroke.length === 0) {
    return items;
    }

  // Функция вернёт элементы, label которых содержит searchStroke
  return items.filter(item => {
    // indexOf вернёт 0 или больше, если строка есть, и -1, если её нет
    return item.label
      .toLowerCase()
      .indexOf(searchStroke.toLowerCase()) > -1;
  });
}

onSearchChange = searchStroke => {
  this.setState({ searchStroke });
};

// ...

return (
<TodoList
    // Передаём не все элементы, а только те, которые видимы (поиск, фильтры)
    todos={visibleItems}
	// ...
  />
)

/******************/
/* SearchPanel.js */
/******************/

// ...

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

return (
  <input
  	// ...
    value={this.state.searchStroke}
    onChange={this.onSearchChange}
  />
);
