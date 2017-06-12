
function Person(name, ssn) {
  if (!(this instanceof Person)) {
    return new Person(name, ssn);
  }
  const self = this;

  this.name = name;
  this.ssn = ssn;
  //
  // function getName() {
  //   console.log(this);
  //   return function() {
  //     return self.name;
  //   }();
  // }

  // this.getName = getName;
}


Person.prototype.getName = function(stuff, ...args) {
  console.log(stuff[3]);
  // console.log(thing, something);
  return this.name;
};

const person = new Person('Jason', 234234234);
const person2 = new Person('Barty', 345345345);


// person.things = function() {
//   console.log(this.getName());
//   console.log('things');
// };
//
// console.log(person.things());


const arr = ['thing', 'something'];

arr.push('more stuff to pass');
arr.push('more stuff to pass again');

const boundFunc = person.getName.bind(person2, arr);


function takeBind(func) {
  console.log(func())
}

takeBind(boundFunc);
