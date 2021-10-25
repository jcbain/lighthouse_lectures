*borrowed largely from Andy*

## Preamble

- students should not be trying to replicate the same on on their screen throughout the lecture and should instead be paying attention and asking questions about the code currently on the screen.
- the discussion is meant to facillitate a deeper understanding of the coding concepts.

### Tips for success
- ask questions during the lecture (either by raising your hand in Zoom or by chat)
- ask for assistance, even for just a code review
- refine your googling skills

### Imposter syndrome
- everyone suffers from it at one point or another 
- don't compare yourself to others in the bootcamp 
- you are here becasue you want to learn web development
- everyone brings something important to this field

## Outline

### Primitive Types

- What are the 7 types (boolean, null, undefined, string, number, symbol, bigint)
- Primitive types are immutable (they cannot be modified after they are created)

```js
const creature = 'bigfoot';
const numToes = 10;
const isTall = true;
let lastSpotted;
const tinderProfile = null;
console.log(typeof tinderProfile); // object ? --> many believe this is an artifact
const type = Symbol('crypto')
const someHugeNumber = 9007199254740992n;
const bigint = 9007199254740992n;

const yugeNumber = Number.MAX_SAFE_INTEGER;  // (2 ** 53) - 1 
console.log(yugeNumber)
```

### Objects

- Everything else is an object including objects, arrays and even functions!
- A data structure made up of key value pairs
- Keys are always strings
- Values can be an JS datatype (primitive, object, function, array...)
- Access values in arrays with index
- Acesss values in objects with key

#### Passing values to functions

[Check it out at Python tutor](http://pythontutor.com/javascript.html#mode=edit)

- primitives are passsed to functions by value. In other words, inside the function, the value of the variable is copied and the original variable remains unchange (immutable).

```js
const firstName = "Pickles";
const sayNewName = function(name) {
  name = "Gato";
  return name;
}

console.log(sayNewName(firstName)) // > "Gato"
// firstName goes unchanged
console.log(firstName) // "Pickles"
```

- objects are passed by reference, in other words the address of the variable in memory is passed to the function and modifications made to the refence within the function are reflected in the value (mutated).

```js
const person = { name: 'Lauren' }
const sayNewName = function(obj) {
  obj.name = 'Kat';
  console.log(`The new name is, ${obj.name}`)
}

sayNewName(person) // The new name is, Kat
// the object reference was mutated and the value reflects that
console.log(person) // > { name: 'Kat' }
```

- however, if in the scope of the function you update the object's reference, then the object value will go unchanged.

```js
const person = { name: 'Lauren' };
const sayNewName = function(obj) {
  obj = {
    name: 'Kat'
  }
  console.log(`The new name is, ${obj.name}`)
}

sayNewName(person) // The new name is, Kat
// the value of the person object goes unchanged
console.log(person) // > { name: 'Lauren' }
```

### Why objects?

Objects are good for storing data that are contextually related.


### Methods

Methods are functions in an object.
- since functions are values, they can be stored in an object
- invoked much in the same way as regular functions.

```js
const alludeCamera = function() {
  console.log('byeeeeeee!')
}

const bigfoot = {
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca'],
  growl: function() {
    console.log('get off my lawn!')
  },
  alludeCamera: alludeCamera
};

// invoke methods
bigfoot.growl(); // > 'get off my lawn'
bigfoot.alludeCamera(); // > 'byeeeeeee!'
```

### What is `this`?
What happens when we want to access some of the information within an object when a method is called? ---> `this`
`this` references the context of the object it is called in. 

```js
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
```