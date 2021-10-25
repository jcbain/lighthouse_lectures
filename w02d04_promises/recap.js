// so on tuesday we talked about asynchronous control flow
// and i think it is important to recap

// console.log('i run first')
const getData = (callback) => {
  // hard code whether or not there is an error
  const runError = false;
  setTimeout(() => {
    // simulate some type of data we might be requesting
    const data = {
      weather: 'sunny'
    }

    // if there was an error of some sort when fetching data
    // pass an error to the callback (1st parameter)
    if(runError) {
      callback("There was an error!")
    // else, don't pass an error but send back the data
    } else {
      callback(null, data)
    }
  }, 1000)
}

// if i wanted to get that data once it returns 
// from my database or api call
getData((err, data) => {
  if(err){
    return console.log(err)
  }

  console.log('my data is:', data)
})

// console.log('then i will run')