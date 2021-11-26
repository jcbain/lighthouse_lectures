// 00 so we will start off simple
// 00 lets just create a function
// 00 that says "hi"

// const sayHi = (name) => {
//   console.log(`hi there, ${name}`);
// };

// 01 to manually test this we just 
// 01 need to invoke our function and use
// 01 node to run our script

// sayHi("Jennifer");
// sayHi("Clement");

// 02 but this is difficult to test a console.log
// 02 so let's do a return so that someone
// 02 can actually use the string that is returned

const sayHi = (name) => {
  return `Hi there, ${name}`;
};

// 02 and now we can capture that result and 
// 02 store it as a variable
const result = sayHi('Jennifer')

// 03 but we introduced you to a strange method from the 
// 03 console (console.assert) that if the first parameter
// 03 is false, then the second parameter will print

// console.assert(false, "if first parameter is false then this message will print")

// 04 so this gives a way to check if the result that we got back
// 04 from our function to see if it matches our expectation

const expected = "Hi there, Jennifer";
console.assert(result === expected, `the expected result did not match, expected result ${expected} but got ${result}`)
