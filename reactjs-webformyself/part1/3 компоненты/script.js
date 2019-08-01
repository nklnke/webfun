function Car(props) {
  return (
    <div className="car">
      <h3>{props.name}</h3>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
      <small>In stock</small>
    </div>
  );
}

const App = (
  <div>
    <Car name="Ford Focus" year="2017" />
    <Car name="Huyord Huyocus" year="2017" />
    <Car name="Mazda 666" year="2010" />
    <Car name="Schtrevolver Lanos" year="2010" />
    <Car name="Lada Sosnina" year="2009" />
    <Car name="Audi A8" year="2012" />
  </div>
);

// Самый простой вариант - один компонент рендерится
// ReactDOM.render(
//   <Car name="Ford Focus" year="2017" />, // Что нужно отрендерить
//   document.querySelector("#root") // Куда это нужно отрендерить
// );

// Норм вариант - создаём объект со всяким дерьмом и уже его рендерим.
// Но не как jsx-элемент, а просто как переменную
ReactDOM.render(
  App, // Что нужно отрендерить
  document.querySelector("#root") // Куда это нужно отрендерить
);
