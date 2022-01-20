// 00 why do we use async code?
// 00 to get blocking code out of the way

// setTimeout(() => {
//   console.log('(1) when do i run?');
// }, 1000);

// console.log('(2) i run');
// console.log('(3) then i run');
// console.log('(4) then me');
// console.log('(5) and finally me');


// 01 but it is not all about timers
// 01 in the above example I am saying that i don't want to 
// 01 wait for  x seconds before my other code runs

const fs = require('fs');


// 02 in this case, we don't want the reading of data blocking
// 02 our sync code
fs.readFile('data/sample100000.html', {encoding: 'utf-8'}, (err, data) => {
  console.log('file 1 read');
});
fs.readFile('data/sample10000.html', {encoding: 'utf-8'}, (err, data) => {
  console.log('file 2 read');
});
fs.readFile('data/sample100.html', {encoding: 'utf-8'}, (err, data) => {
  console.log('file 3 read');
});

console.log('continue doing what you do');

