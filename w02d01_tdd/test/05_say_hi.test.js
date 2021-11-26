// 00 so now i want to do what we did
// 00 before but i want to set our tests 
// 00 up to be run by the test-runner mocha

const assert = require("assert").strict;
const sayHi = require("../03_say_hi"); // will have to change this path


// 01 so we are going to use two new functions
// 01 `describe()` which will just desribe our
// 01 tests that we are running
// 01 `it()` will run the test itself

// 02 describe takes a string and a callback function
describe('tests for the sayHi function', () => {
  // 02 and so does the it
  it('returns "Hi there, Jennifer" when given the string "Jennifer"', () => {
    // 03, then our test goes inside the callback
    // 03 but before we do that what happens if i just
    // 03 call it with nothing in the body?
    // 03 it passes. So what is mocha listening for?
    // 03 errors...
    // throw new Error("there was an error!!!")

    // 04 well our assertion library throws errors
    // 04 so if it throws an error than it will be caught
    // 04 by mocha and we will see it fail in our tests
    const result = sayHi('Jennifer')
    const expected = "Hi there, Jennifer";

    assert.equal(result, expected)
  })

  // 05 so we can add as many its as we want in here testing
  // 05 different conditions of our function

  // 06 however, running that command in our terminal
  // 06 is a mouthful so we can actually put this in the script
})

// 07 so now we are going to do test driven
// 07 development..in otherwords, we are going to
// 07 write our tests first then our functions


