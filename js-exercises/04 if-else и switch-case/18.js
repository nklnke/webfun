// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

var stroke = "abcde";

if (stroke.charAt(0) == "a") {
  console.log("true");
} else {
  console.log("false");
}

if (stroke[0] == "a") {
  console.log("true");
} else {
  console.log("false");
}
