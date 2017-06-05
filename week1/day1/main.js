var val;

var object = {
  'key':'value',
};

object.key
object['key'] = 'another value';
object.value = 'something else';

console.log(object.value);

var arr = [2, 8, "this", "that"];
arr.push(19);

arr[arr.length] = 34;

arr[300] = 'hmmm?';

console.log(arr.length);

/**

0, '', [], {}, null, false, undefined, NaN

*/
console.log(NaN === NaN);


var number = 10;
var string = 'string ';

function thisFunction(val) {
  var parent = 'parent';

  function childScope() {
    var child ='child';
    console.log('child scope');
    console.log(parent);

    return child;
  }

  childScope();

  return val;
}
val = 'some value';

// console.log(thisFunction());

let index = 0;

for(let index = 0; index < 5; index++) {
  for (let idx = 0; idx < 5; idx++) {

  }
}

// console.log(index);

// var count = 0;

function counter() {
  var count = 0;

  function childCounter() {
    count++;
    return count;
  }
  return childCounter;
}

counter = counter();
console.log(counter.toString());
console.log(counter());
console.log(counter());
console.log(counter());

/**

counter()
=> 1

counter()
=> 2

counter()
=> 3

counter()
=> 4

*/

//
