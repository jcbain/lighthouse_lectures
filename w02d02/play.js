const fs = require('fs')

// const data = fs.readFileSync('./index.html', {encoding: 'utf8'})
// console.log(data)

console.log('before file read')
fs.readFile('./index.htmdfl', {encoding: 'utf8'}, (err, data) => {
  if(err) {
    return console.log(`there was an error: ${err}`)
  }
  console.log(data)
})
console.log('after file read')