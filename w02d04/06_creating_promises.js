// how do we create a promise

// all we have to do is create a new Promise
// this just instantiates object of the class Promise
// and it takes in a callback. This callback has 
// two parameters 
// resolve and reject
// resolve will pass the value if the promise is resolved (what we get when we call then)\
// reject is when the promise fails (catch runs)
const promiseExample = new Promise((resolve, reject) => {
  // we can either resolve with some value
  // resolve('yay, I resolved')
  // or reject
  reject('dang, i was rejected')
})

console.log(promiseExample)
promiseExample
  .then(data => console.log(data))
  .catch(err => console.log(err))

// this is how you create a promise
// it's up to us when we create the promise to say when the resovle function is run
// and when the reject function is run