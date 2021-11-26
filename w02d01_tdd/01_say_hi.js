// 00 no more console.assert we are going to bring
// 00 in an outside library
// 00 but before we do that we have to discuss where node 
// 00 came from - node is a javascript runtime (executes our js)
// 00 and was built from v8 engine (chromes runtime)
// 00 with this functionality, they gave us modules that we
// 00 could use should we need it
// 00 google "node assert" --> and look up assert.equal

// 01 now the way to bring in outside packages into this 
// 01 file, is we use the word require
// 01 require("assert") // but we want to save the result to something
// const assert = require("assert");
const assert = require("assert").strict;

// 02 so what does assert look like then
// console.log(assert);


const sayHi = (name) => {
  return `Hi there, ${name}`;
};


const result = sayHi('Jennifer')
const expected = "Hi there, Jennifer";

// 03 now i am going to assert that these two
// 03 things are equal
assert.equal(result, expected); // and if what do we get?
// 04 nothing which means that everything went well

// 04 but what if our result does not match our expected????

// assert.strictEqual(result, "Hi, there, Jimmifer")

// 05 there we go, we threw an error!
// 05 and what happens with errors? Does any code after
// 05 run? 

console.log("will this run?")
// 06 it doesn't because if an error is thrown
// 06 and not handled then it will stop execution

// 07 but now, the only stuff that is doing actual
// 07 application work is our sayHi function
// 07 our tests are just for our peace of mind
// 07 to make sure our code works
// 07 so we generally want to pull this testing code out
// 07 to its own file
