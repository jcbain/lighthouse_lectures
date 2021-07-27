const fs = require('fs');

// const data = fs.readFileSync('./index.html')
// will return a buffer hexidecimal encoding
// buffer allow us to work with binary data
// console.log(data)

// encoding - how our 1 and 0s are lined up
// utf-8 has lots of characters including emojis

const data = fs.readFileSync('./index.html', {encoding: 'utf-8'})
console.log(data)

// readFile uses an error first callback
// again it would have to be run after all of our sync code
fs.readFile('./index.html',{encoding: 'utf-8'}, (err, data) => {
  if(err) {
    return console.log(err);
  }
  
  console.log(data.length)
})


// console.log('i should run first')