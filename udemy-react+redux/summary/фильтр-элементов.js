// 1) Создаём функцию для фильтрации (app.js)

filter(items, filter) {
  switch(filter) {
    case "all":
      return items;

    case "active":
      // Фильтр возвращает те элементы, которые не выполнены (!item.done)
      return items.filter(item => !item.done);

    case "done":
      return items.filter(item => item.done);

    default:
      return items;
  }
}

// 2) В state устанавливаем параметр (app.js)
// Этот параметр будет обновляться

  filter: 'all' // active, all или done

// 3) Event listener. Обновляет значение filter в state (app.js)

// App передаёт ItemStstusFilter, какой элемент должен быть активен

<ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />

// 4) Свойства кнопок в отдельный массив (item-status-filter.js)

buttons = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" }
];

// 5) Проходимся по массиву и для каждого элемента создаётся своя кнопка
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

