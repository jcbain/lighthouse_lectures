// primitive types
// numbers, booleans, undefined, null, string... symbol, bigint

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

const yugeNumber = Number.MAX_SAFE_INTEGER; // 2 ** 53 - 1
console.log(yugeNumber)

// console.log(9999999999999999); // > 10000000000000000
// console.log(9007199254740992 === 9007199254740993) // > true

// non primitives --- structural data types

// objects (order not important -- key value pairs)
// arrays (order is important -- index value pair) -- also an object

const arr = [];
const obj = {};
