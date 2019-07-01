// Spread-оператор, оператор разворота.

// Разворачивает вложенные массивы и превращает родительский
// массив в один общий набор данных.

let video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [video, blogs, "vk", "fb"],
  internet1 = [...video, ...blogs, "vk", "fb"]; // <--

console.log(internet);
console.log(internet1);

// ========================

function superFunction(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(a + b + c);
}

let numbers = [2, 5, 7];

// superFunction(numbers); выведет три строки - весь массив
// numbers и два раза undefined.
superFunction(...numbers);
