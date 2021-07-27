// setInterval
// polling is a good example of when we might use setInterval
// every so often we want to poll our server and see if any updates
// have been made
setInterval(() => {
  console.log('hi there')
}, 1000)


// we can also clear the interval using some condition
// with a handle. A handle here will be the return object
// of setInterval

// iteration here being remembered by the callback is known as a closure
// it has access to variables in the scope when it's declared
let iteration = 0;
const interval = setInterval(() => {
  iteration++
  console.log(iteration)
  
  if(iteration === 10) {
    clearInterval(interval)
  }

}, 1000)

// why wont this work?
// runs syncronously
// if(iteration === 10) {
//   clearInterval(interval)
// }


// we can also use this
// let iteration = 0;
// const interval = setInterval(function() {
//   iteration++
//   console.log(iteration)
  
//   if(iteration === 10) {
//     clearInterval(this)
//   }

// }, 250)
