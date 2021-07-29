const fs = require('fs');

// if we are using these asynchronous functions, we can use the err first convention.
// every callback needs to handle the error otherwise node will stop execution of the script.
// this can get very tedious. 
// screen is already cluttered.
fs.readFile('00_intro.js', {encoding: 'utf-8'}, (err, data) => {
  if(err) {
    return console.log(err)
  }
  console.log(data.length)
  fs.readFile('./profile-generator-callbacks.js', {encoding: 'utf-8'}, (err, data) => {
    if(err) {
      return console.log(err)
    }
    console.log(data.length)
    fs.readFile('./profile-generator-callbacks.js', {encoding: 'utf-8'}, (err, data) => {
      if(err) {
        return console.log(err)
      }
      console.log(data.length)
    })
  })
})

setTimeout(() => {
  console.log("i've run")
}, 4000)