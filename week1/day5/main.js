
function each(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index);
  }
}

const func = function() {
  console.log('my function');
};

const arr = [1,4,6,3,7,8,10];
const object = {};

each(arr, function(item, number) {
  console.log(`item is ${ item } and index is ${ number }`);
});


function map(array, callback) {
  const results = [];

  each(array, function(element, index) {
    results.push(callback(element, index));
  });

  return results;
}

function find(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return array[index];
    }
  }
}

function filter(array, callback) {
  const results = [];

  each(array, function(element, index) {
    if (callback(element, index)) {
      results.push(element);
    }
  })

  return results;
}

function reduce(array, callback, memo) {
  const results = [].concat(array);

  if (memo === undefined) {
    memo = results.pop();
  }

  each(results, function(element, index) {
    memo = callback(memo, element, index);
  });

  return memo;
}

let results = map(arr, add);
console.log('map results', results);

results = map(results, function(element, index) {
  return element * index;
});

console.log('map results', results);

function add(num1, num2) {
  return num1 + num2;
}

let found = find(results, function(element, index) {
  return element % 2 === 0;
});

console.log(`we found ${ found }`);

results = filter(results, function(element, index) {
  return element % 2 === 0;
});

console.log('filter results', results);

found = reduce(arr, add, reduce(results, add));

console.log(`we reduce to ${ found }`);
//
