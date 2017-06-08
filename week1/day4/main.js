
function Person(name, ssn) {
  // if (!(this instanceof Person)) {
  //   console.log('calling new');
  //   return new Person(name, ssn);
  // }

  this._name = name;
  this._ssn = ssn;
  // this.geName = function() { return name };
}

Person.prototype.getName = function() {
  return this.name;
};

Object.defineProperty(Person.prototype, 'name', {
  get: function() {
    return this._name;
  }
});

function Student(name, ssn, homework) {
  Person.call(this, name, ssn);

  this.homework = homework;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.doHomework = function() {
  console.log('doing homework');
};

const object = {
  toString: function() {
    return 'string';
  }
};

const jason = new Person('Jason', 234234234);
jason.name = 'Katie';
// jason._name = 'Katie';
// console.log(jason.name);
// console.log(object.toString());


const student = new Student('Marty', 345345345, []);

console.log(Student.prototype.constructor);
console.log(student.doHomework())


function sayThis() {
  console.log(this);
}

const person = { name: 'Jason' };

person.sayThis = sayThis;

// person.sayThis();

class BaseNode {
  constructor(value) {
    this.value = value;

    console.log(`inside base node with value ${ this.value }`);
  }
}

// const node = new BaseNode(7);

class SLLNode extends BaseNode {
  constructor(value) {
    super(value);

    this.next = null;

    console.log('inside ssl node');
  }
}

const sll = new SLLNode(8);

console.log(sll.value);

class DLLNode extends SLLNode {
  constructor(value) {
    super(value);

    this.prev = null;

    console.log('inside dll node');
  }
}


const dll = new DLLNode(10);

//
