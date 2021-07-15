// primitive types
// numbers, booleans, undefined, null, string... symbol, bigint

const height = 65.5;
const isAwesome = false;
const notDefined = undefined;
const nul = null;
const name = 'Scully';

const mysteriousSymbol = Symbol('Mulder');
const hugeNumber = Number.MAX_SAFE_INTEGER + 1;
const yugeNumber = 9007199254740992n;

console.log('one large number', hugeNumber);
console.log(yugeNumber === 9007199254740993n);


// non-primitives
// objects

const mythicalCreatures = ['bigfoot', 'el chupacabra', 'loch ness monster', 'unicorn'];
const mythicalCreature = {
  type: 'bigfoot',
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca']
}