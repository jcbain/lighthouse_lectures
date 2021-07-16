// example object with an object literal
const obj = {
  name: 'etta', 
  age: 77, 
  canTieShoes: true
};

// accessing object values
// square bracket notation
console.log("obj['name'] -->", obj['name']);
// dot notation
console.log("obj.name --> ", obj.name);

// variable to access value
const key = 'canTieShoes';
console.log("obj[key]", obj[key])
console.log("obj.key", obj.key) // --> undefined


// primitives are immutable 
// they can't be changed... just reassigned
const creature = 'bigfoot';

// creature a function that takes in a creature as an input
// changes creature to 'el chupacabra'
// prints out the creature to the console
const printDifferentCreature = function(creature){
  creature = 'el chupacabra';
  console.log('creature during function:', creature)
}

// what do you think the variable `creature` will be after it is called?
console.log('creature before function:', creature);
printDifferentCreature(creature);
console.log('creature after function', creature)

const creatureObject = {
  name: 'bigfoot',
  isTall: true 
};

const printDifferentCreatureName = function(obj){
  obj.name = 'el chupacabra';
  console.log('creature name during function:', obj.name);
}


console.log('creature name before function:', creatureObject);
printDifferentCreatureName(creatureObject);
console.log('creature name after function', creatureObject);


const creatureOne = 'bigfoot';
const nameOne = 'bigfoot';
const locationOne = 'U.S.'

const creatureTwo = 'el chupacabra';
const nameTwo = 'billie';
const locationTwo = 'Puerto Rico';


const creatures = ['bigfoot', 'el chupacabra', 'loch ness monster', 'unicorn'];
const names = ['harry', 'billie', 'lauren', 'alex'];
const locations = ['U.S.', 'Puerto Rico', 'Scottland', 'Mongolia'];

const mythicalCreature = {
  type: 'bigfoot',
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca']
};