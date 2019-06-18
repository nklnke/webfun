let soldier = {
  health: 400,
  armor: 100
};

let john = {
  health: 200
};

// Делаем прототипом джона солдата
john.__proto__ = soldier;

// У джона появился армор (сначала ищется армор у джона,
// не находится, и далее ищется у его прототипа - soldier)
console.log(john);
console.log(john.armor);
