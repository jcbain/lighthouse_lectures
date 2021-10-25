// Promise.race
const promiseFunctions = require('./promise_generator');

const resolvePromise = promiseFunctions.resolvePromise;
const rejectPromise = promiseFunctions.rejectPromise;
const randomPromise = promiseFunctions.randomPromise;

// first let's create a random millisecond generator

const generateRandomDelay = () => Math.floor(Math.random() * 5000);

// console.log(generateRandomDelay())
// console.log(generateRandomDelay())
// console.log(generateRandomDelay())
// console.log(generateRandomDelay())

// so promise.race takes in an array of promises
// and the first one to fulfill or reject returns
const promise1 = resolvePromise('one', generateRandomDelay())
const promise2 = resolvePromise('two', generateRandomDelay())
const promise3 = rejectPromise('three', generateRandomDelay())
const promise4 = randomPromise('four', generateRandomDelay())

Promise.race([promise1, promise2, promise3, promise4])
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

