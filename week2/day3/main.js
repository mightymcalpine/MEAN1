// const fs = require('fs');

const circle = require('./circle');
const increment = require('./increment')(1);
const increment2 = require('./increment')(3);

console.log(circle.area(12))
console.log(circle.circumference(12))
// console.log(circle);
//
for (var i = 0; i < 4; i++) {
  console.log(increment());
}

for (var i = 0; i < 4; i++) {
  console.log(increment2());
}
//console.log(increment);
/**

increment()
=> 1
increment()
=> 2
increment()
=> 3

increment2()
=> 3
increment2()
=> 6
*/
