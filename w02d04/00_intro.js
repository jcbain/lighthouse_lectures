const promiseFunctions = require('./promise_generator');

const resolvePromise = promiseFunctions.resolvePromise;

const promise = resolvePromise('one', 3000);
console.log('promise', promise);

// can you outlast the promise to wait for it to resolve?
// yes, you can but just because we know how long our promise
// is going to take to resolve, doesn't mean we will know
// how long more real-world examples will take to resolve.
// setTimeout(() => {
//   console.log(promise)
// }, 3001)

// so much like in async functions we pass the value
// to the callback once it resolves, we do the same sort
// of thing with promises. Promises have a .then method 
// that takes a callback once the promise resolves for which 
// we can then do something with the value.
// we call this consuming a value
// promise.then((data) => {
//   console.log(data)
// })

// return a value that isn't a promise, 
// it just wraps it in a promise and resolves immediately
// const promise2 = promise
//   .then((data) => {
//     console.log(data)
//     return 'some string'
//   })

// promise2.then((data) => {
//   console.log(data)
// })

// we can even see in synchronous time
// that what promise2 is is a promise
// console.log('promise2', promise2)

// most of the time we won't store our promises in
// intermediate values. Instead, we will chain them along
promise
  .then((data) => {
    console.log(data);
    return "some string"
  })
  .then((data) => {
    console.log(data)
  })
