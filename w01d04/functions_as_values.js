// let's do a bit of recap to hopefully segue us nicely into today's topic

const myNum = 33;
const yourNum = myNum;
console.log('yourNum', yourNum);

// do you think we could so something similar with functions?

const sayPetName = function(petName) {
  console.log(`my pet's name is ${petName}`);
}

const printPetName = sayPetName;

// will this work?
sayPetName('Pippa');
printPetName('Prairie');

// is this allowed? yes! functions are just special types of objects
printPetName.randomKey = 'random';
console.log(printPetName.randomKey);

// what do you think this will do to sayPetName?
// it mutates
console.log(sayPetName.randomKey)

// this is just a contrived example to demonstrate that 
// functions are just objects and that objects are mutable


// how about this?
const addTwo = function(num) {
  return num + 2;
}

const subtractTwo = function(num) {
  return num - 2;
}

// console.log(subtractTwo.toString())

// put functions into a data sctructure like an array
const mathFunctions = [addTwo, subtractTwo];

// not the prettiest but it works
console.log('mathFunctions[0](5)', mathFunctions[0](4))
console.log('mathFunctions[1](5)', mathFunctions[1](4));
