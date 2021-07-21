// what if I wanted to access some information from within the `bigfoot` class?
// const printBio = function() {
//   console.log(`My name is ${bigfoot.name} and I have ${bigfoot.hasLargeFeet ? 'big' : 'small'} feet!`)
// };

const printBio = function() {
    console.log(`My name is ${this.name} and I have ${this.hasLargeFeet ? 'big' : 'small'} feet!`)
};

const bigfoot = {
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca'],
  printBio: printBio
};

const elChupacabra = {
  name: 'billie',
  location: 'Puerto Rico.',
  hasLargeFeet: false,
  relatives: [],
  printBio: printBio
};

bigfoot.printBio();
// what will happen if I call printBio on `elChupacabra` object?
elChupacabra.printBio()


// what is `this`?
// `this` is a keyword that references the object that it belongs to
const printThis = function() {
  console.log('this is', this)
}

elChupacabra.printThis = printThis;
elChupacabra.printThis();

// what if it doesn't belong to an object?
printThis()
// it points to the global object

// exception... arrow functions
const runArrowFunction = () => {
  console.log(`I'm an arrow function and this is this:`, this)
}

runArrowFunction();
