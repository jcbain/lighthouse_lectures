// looping objects

const bigfoot = {
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca']
};

// iterating over arrays
const relatives = ['yeti', 'gigantopithecus', 'chewbacca'];

// any examples of how to loop over an array?

for (let i = 0; i < relatives.length; i++) {
  console.log(relatives[i])
}

// nice shorthand
for (const value of relatives) {
  console.log(value)
}

// how about a `for..of` loop  with objects? 
// for (const value of bigfoot) {
//   console.log(value);
// }


for (const key in bigfoot) {
  // console.log(key);
  // console.log(bigfoot.key)
  console.log(bigfoot[key])
}
