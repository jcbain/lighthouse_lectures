const fs = require('fs')

// text is a string
const splitStringIntoArray = (text) => {
  const textArray = text.split(" ");
  return textArray
}

console.log('(1) this should run')

fs.readFile('./index.html', {encoding: 'utf8'}, (err, data) => {
  if(err) return console.log(err);

  const textArray = splitStringIntoArray(data)
  console.log(textArray)
})

console.log('(2) this should also run before file is processed')