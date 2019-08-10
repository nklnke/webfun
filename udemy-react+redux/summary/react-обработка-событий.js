// - Добавить onclick (onblur, onMouseOver, ...) к элементу
// - Передать функцию
// - Убедиться, что this сохранит правильное значение внутри функции

// Способы сохранения контекста this:

// 1) event listener через конструктор:
constructor() {
  // Если класс наследует какой-либо другой, то в конструкторе нужно
  // вызвать конструктор суперклассов:
  super();

  this.onLabelClick = () => {
    console.log("msg");
  };
}

// 2) event  listener через .bind(this):
<a href="" onClick={this.onLabelClick}.bind(this)>click</a>

// 3) Самый норм: event listener через class fields:
onLabelClick = () => {
  console.log("msg");
};
