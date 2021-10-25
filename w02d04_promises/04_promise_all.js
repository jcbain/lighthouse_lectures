const promiseFunctions = require('./promise_generator');

const resolvePromise = promiseFunctions.resolvePromise;
const rejectPromise = promiseFunctions.rejectPromise;

//
const mulder = resolvePromise('burrito 🌯', 3000);
const scully = resolvePromise('burrito bowl 🥣', 2000)
const skinner = resolvePromise('chips and guac 🥑', 200)

// so we can run all of the promises
// and it returns a single promise
// let's see what that does
Promise.all([mulder, scully, skinner])
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

// so the promise resolves to an array
// in the same order that 

// what happens if we have a rejected promise
const mulder = resolvePromise('burrito 🌯', 3000);
const scully = resolvePromise('burrito bowl 🥣', 2000)
const skinner = resolvePromise('chips and guac 🥑', 200)
const jen = rejectPromise('bowl of tomatoes 🍅')

Promise.all([mulder, scully, skinner, jen])
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
