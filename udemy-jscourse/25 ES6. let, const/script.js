// Переменные, созданные let или const,
// видны лишь в блоке, ограниченном {}.

// Они создаются только тогда, когда до них
// дошла очередь.

// В цикле для каждой итерации
// создаётся своя переменная.

function makeArray() {
  var items = [];

  for (var i = 0; i < 10; i++) {
  // for (let i = 0; i < 10; i++) {
    var item = function() {
      console.log(i);
    };
    items.push(item);
  }

  return items;
}

var arr = makeArray();

arr[0]();
arr[1]();
arr[2]();
arr[3]();
