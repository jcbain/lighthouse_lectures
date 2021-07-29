const promiseFunctions = require('./promise_generator');

const resolvePromise = promiseFunctions.resolvePromise;
const rejectPromise = promiseFunctions.rejectPromise;


// so we've seen this
// console.log('this runs syncronously')
// resolvePromise("1", 0)
//   .then((data) => {
//     console.log(data);
//     return resolvePromise("2", 500)
//   })
//   .then((data) => {
//     console.log(data)
//     return rejectPromise("3", 500)
//   })

// console.log('so does this')

// but what happens when a promise is rejected?

// extra but you can mention how when an Error is thrown node stops execution
// so we must catch the error to handle it
// throw new Error("poop")

// resolvePromise("1", 0)
//   .then((data) => {
//     console.log(data);
//     return resolvePromise("2", 500)
//   })
//   .then((data) => {
//     console.log(data)
//     return rejectPromise("3", 500)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// let's move the rejection up the chain
resolvePromise("1", 0)
  .then((data) => {
    console.log(data);
    return resolvePromise("2", 500)
  })
  .then((data) => {
    console.log(data)
    return rejectPromise("3", 500)
  })
  .then((data) => {
    console.log(data);
    return resolvePromise("4", 500)
  })
  .then((data) => {
    console.log(data);
    return resolvePromise("5", 500)
  })
  .then((data) => {
    console.log(data);
    return resolvePromise("6", 500)
  })
  .catch((err) => {
    console.log(err)
  })

  // setTimeout(() => {
  //   console.log("i've run")
  // }, 4000)
