// let's create a higher order function
// what is a higher order function again?
// this higher order function is going to create some data
// and in the setTimeout it will mutate the data and we will call the callback
const higherOrderFunction = (callback) => {
  const data = {
    userName: 'Mulder'
  }
  console.log('(1) before the settimeout')

  setTimeout(() => {
    data.userName = 'Scully';
    callback()
  }, 1000)

  console.log('(2) after the settimeout')
}

// invoke the higherOrderFunction
// what order will the console.logs appear
// 3, 1, 2, 5, 4
console.log('(3) before the main call')
higherOrderFunction(() => {
  console.log('(4) inside the callback')
})
console.log('(5) after the main call')

// my question now is how do we get our data out?
const higherOrderFunction = (callback) => {
  const data = {
    userName: 'Mulder'
  }
  console.log('(1) before the settimeout')

  setTimeout(() => {
    data.userName = 'Scully';
    callback(data)
    // return data; // no one here to capture the value so the return value returns undefined
  }, 1000)

  console.log('(2) after the settimeout')
  // return data // doesn't work/ executed syncronously/ still Mulder
}

const returnVal = higherOrderFunction((something) => {
  console.log('hello')
  console.log(something)
})

// const returnVal = higherOrderFunction(() => {
//   console.log('hello')

// })

// console.log(returnVal)

// once all the syncronous code runs, there is no one here to capture the value
// for asyncronous code, there is no explicit return value

// this is how async functions work. you essentially say, once the data is ready, here is a function
// use that function to operate on the data we get back once we get it back

// this would would work if the higherOrderFucntion returned data
// because it runs after data was muatated
// but avoid because most async functions we don't know how long they will take until they
// execute the callback
// setTimeout(() => {
//   console.log(returnVal)
// }, 1001)
