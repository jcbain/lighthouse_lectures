// how might we get blocking code out of the way?
// asynchronous control flow

// let's talk about setTimeout
// looking at the MDN we can get a good idea about how to use this function

// i want to log hello there after two seconds
setTimeout(() => {
  console.log('hello there')
}, 2000)

// how about if i add another one? 
// which will output first
setTimeout(() => {
  console.log('am I second?')
}, 1000)

// now what if we set up our code like this?
// 1, 4, 3, 2
console.log('(1) before setTimeouts');

setTimeout(() => {
  console.log('(2) first timeout with 2s delay')
}, 2000)

setTimeout(() => {
  console.log('(3) second timeout with 1s delay')
}, 1000)

console.log('(4) after setTimeouts')

// what happens if i put an expensive operation in?
// some blocking code?
const stop = 20000
for(let i = 0; i < stop; i++){
  const date = new Date();
  console.log(date);
}
// since this is syncronous, it will run before the asyncronous code
// but the asyncronous code almost appears at once


// what happens if i remove the delay parameter since it said was optionsal?
// do we have a guess on what the order of console.logs will be?
console.log('(1) before setTimeouts');

const returnValue = setTimeout(() => {
  console.log('(2) first timeout')
})
// we get a return value here from setTimeouts (it says number but is an object)
// take a look at the idleTimeout property, it defaults to 1ms
// what happens if we pass in 2000
// what about 0
console.log(returnValue)

setTimeout(() => {
  console.log('(3) second timeout')
})

console.log('(4) after setTimeouts')