
function Person(name) {
  this.name = name;

  Person.people.push(this);
}

Person.people = [];

Person.prototype.sayHello = function() {
  console.log(`hello ${ this.name }`);
};

function Parent(name) {
  Person.call(this, name);
}


Parent.prototype = Object.create(Person.prototype);
Parent.prototype.constructor = Parent;


function Child(name) {
  Person.call(this, name);

  this.hasDoneChores = false;
  this.savings = 0;
}

Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;

Parent.prototype.assignChores = function(child) {
  const payment = Math.floor(Math.random()*100);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (child.hasDoneChores) {
        resolve(payment);
      } else {
        reject(new Error('no electronics'));
      }
    }, 1500);
  });
};

Child.prototype.doChores = function(chore, promiseOfPaymentOrPunishment) {
  this.hasDoneChores = Math.random()*100 > 35;

  promiseOfPaymentOrPunishment
    .then((payment) => {
      console.log(`child successfully completed ${ chore } and receives ${ payment }`);
      this.savings += payment;
    })
    .then(this.seeSavings.bind(this))
    .catch(function(error) {
      console.log(`child failed to complete ${ chore } and must have ${ error.message }`);
    });
};

Child.prototype.seeSavings = function() {
  console.log(`savings ${ this.savings }`);
}

const parent = new Parent('Jason');
const child = new Child('Never');

for (let index = 0; index < 4; index++) {
  child.doChores('dishes', parent.assignChores(child));
}
