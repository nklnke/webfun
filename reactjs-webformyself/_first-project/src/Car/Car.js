import React from "react";

// 1)
// function Car() {
//   return (
//     <h2>This is hui component</h2>
//   )
// }

// 2) Проще в ES6:
// const car = () => {
//   return <h2>This is hui component</h2>;
// };

// 3) Ещё проще (без фигурных скобок сразу получается return):
// const car = () => <h2>This is hui component</h2>;

// const car = () => (
//   <div>
//     This is hui component <br/>
//     <strong>Test</strong>
//   </div>
// );

// export default car;

// 4) Суперпросто:
export default () => (
  <div>
    This is hui component <br />
    <strong>Test</strong>
  </div>
);
