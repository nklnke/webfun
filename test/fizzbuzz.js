// Сегодня на собесе дали нестандартный FizzBuzz, надо было
// передавать в функцию еще 2 аргумента, и если число от 1
// до 100 делилось на 3, 5 и на эти 2 аргумента - показывалось
// FizzBuzz, в другом случае - конкатенация строк, или просто
// вывод числа.

function fizzBuzzTernary(foo, doo) {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 == 0) {
    	result += 'fizz'
    }
    if (i % 5 == 0) {
    	result += 'buzz'
    }
    if (i % foo == 0) {
    	result += 'foo'
    }
    if (i % doo == 0) {
    	result += 'doo'
    }
    if (result == 'fizzbuzzfoodoo') {
    	result = 'FizzBuzz!!!!!!'
    }
    
    console.log(result == '' ? i : result)
  }
}

fizzBuzzTernary(4, 6);
