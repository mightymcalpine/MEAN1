/**


personMaker

name, items[]

*/

function treehouse(name, items) {
  const person = {
    items
  };
  person.name = name;
  person.take = take;
  function take(item, target) {
    if (!target || !Array.isArray(target.items)) {
      throw new Error('Target must have an items array');
    }

    for (const index in target.items) {
      if (target.items[index] == item){
        target.items.splice(index, 1);
        person.items.push(item);
        return true;
      }
    }
    return false;
  }
  return person;
}



var person1 = treehouse('Barty', ['wallet', 'keys', 'phone']);
var person2 = treehouse('Ezra', ['nickle', 'cheese puff', 'tots']);
person2.take('wallet', person1)
// person1.take = take;

// take('snacks')

const backpack = {
  items: ['compass', 'map', 'shovel']
};


backpack.string = 'string';

person2.take('compass', backpack);

console.log(person2);
