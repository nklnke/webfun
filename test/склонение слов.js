var cigaretten = 22,
  cigarettenStr = cigaretten.toString(),
  endOfWord = cigarettenStr.substr(cigarettenStr.length - 1),
  word; // = ["сигарет", "сигарета", "сигареты"];

if ((endOfWord >= 5 && endOfWord <= 9) || endOfWord == 0) {
  word = "сигарет";
} else if (endOfWord == 1) {
  word = "сигарета";
} else if (endOfWord >= 2 && endOfWord <= 4) {
  word = "сигареты";
}

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

console.log(cigarettenStr);
console.log(endOfWord);
console.log(cigaretten + word);

// 0 сигарет
// 1 сигарета
// 2 сигареты
// 3 сигареты
// 4 сигареты
// 5 сигарет
// 6 сигарет
// 7 сигарет
// 8 сигарет
// 9 сигарет
