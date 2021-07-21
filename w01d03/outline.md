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
console.log(typeof creature);

const numToes = 10;
console.log(typeof numToes);

const isTall = true;
console.log(typeof isTall);

let lastSpotted;
console.log(typeof lastSpotted);

const tinderProfile = null;
console.log(typeof tinderProfile);

const type = Symbol('crypto')
const someHugeNumber = 9007199254740992n;


const bigint = 9007199254740992n;
console.log(typeof bigint);

const yugeNumber = Number.MAX_SAFE_INTEGER; 
console.log(yugeNumber)
```