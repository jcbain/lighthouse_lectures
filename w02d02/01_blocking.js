// javascript is synchronous
// single-threaded (one process executes at a time)

// we all know what is going to happen here
// console.log(1);
// console.log(2);
// console.log(3); 

// what if we had an expensive operation
const stop = 10000;
console.log('(1) I run first');

for(let i = 0; i < stop; i++){
  const date = new Date();
  console.log(date);
}
console.log('(2) I run last')

// getTime here is a method to get the number of milleseconds that have 
// elapsed since the Unix epoch (00:00:00 utc jan 1 1970)
const startTime = new Date().getTime();

for(let i = 0; i < stop; i++){
  const date = new Date();
  console.log(date);
}

const endTime = new Date().getTime();
const elapsedTime = endTime - startTime;
console.log(`The for loop took ${elapsedTime}ms to run`)