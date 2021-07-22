const creatures = ['bigfoot', 'yeti', 'pizza the hut'];

//  it is often that we find ourself doing something
// to each value in an array. Currently, we have a way of doing this
// with an iterator
// what does this look like?
// for (const creature of creatures) {
//   const phrase = `hello, ${creature}`;
//   console.log(phrase);
// }

// looping over an array of tasks is very generic and common
// then the inside block is very specific
// we have a very generic condition wrapped around a very specific behavior

// we can then just put that behavior into its own function
const sayHello = (creature) => {
  const phrase = `hello, ${creature}`;
  console.log(phrase);
}

for (const creature of creatures) {
  sayHello(creature)
}

// but given that looping over an array and doing something 
// with its value is a generic operation that you will do 
// thousands of times, how about we build that out into 
// its own function


const loopOverArray = (arr, callback) => {
  for (const element of arr) {
    callback(element)
  }
}

// this is a higher order function because it takes a callback as a parameter
// this callback is called on each element in the array passed 
loopOverArray(creatures, sayHello)
loopOverArray(['prairie', 'pippa', 'floppy'], (pet) => console.log(`my pet's name is ${pet}`))
// const petPhrases = []
// loopOverArray(['prairie', 'pippa', 'floppy'], (pet) => {
//   const petPhrase = `my pet's name is ${pet}`;
//   petPhrases.push(petPhrase)
// })
// console.log(petPhrases)




const nums = [1, 2, 3, 4, 5];
const names = ['james', 'jen', 'pizza']


const ourFilter = (arr, callback) => {

  // create the array to store the filtered values
  const filteredArray = [];

  // iterate over the values of the array
  for(const val of arr){
    // run the callback on each value// callback should be a logical test
    const meetsCondition = callback(val)
    // it output of the callback on the value is `true` push that value to the filteredArray
    if(meetsCondition === true){ // if the callback result is equal to true at that value
      filteredArray.push(val)
    }
  }

  // return the fitleredArray
  return filteredArray;
}

// console.log(ourFilter(nums, val => 'james'))
console.log(ourFilter(nums, val => val > 2));
console.log(ourFilter(names, val => val === 'pizza'))