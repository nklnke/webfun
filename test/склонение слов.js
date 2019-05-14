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

// // 0 сигарет
// // 1 сигарета
// 2сипгареты
// 3сигареты
// 4сигареты
// // 5сигарет
// // 6сигарет
// // 7сигарет
// // 8сигарет
// // 9сигарет
