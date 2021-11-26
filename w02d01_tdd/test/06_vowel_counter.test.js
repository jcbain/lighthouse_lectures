// 00 so for your prep work you built a function called
// 00 called vowelCounter that counted the number
// 00 of vowels in a string
// 00 so the first thing we are going to do is require it
// 00 even though we haven't built it yet
const assert = require("assert").strict;
const vowelCounter = require("../07_vowel_counter");

// 01 then we set up our tests
// 01 and there will be three of them
// 01 so even though we haven't written 
// 01 the function yet, we still know
// 01 what the function should return 
// 01 under certain conditions
describe('tests for vowelCounter', () => {
  it('it returns 3 when given the string "orange"', () => {
    const actual = vowelCounter("orange")
    const expected = 3;

    assert.equal(actual, expected);
  });

  it('it returns 5 when given the string "lighthouse labs"', () => {
    const actual = vowelCounter("lighthouse labs")
    const expected = 5;

    assert.equal(actual, expected);
  });

  it('it returns 5 when given the string "aeiou"', () => {
    const actual = vowelCounter("aeiou")
    const expected = 5;

    assert.equal(actual, expected);
  });

  it('it returns 5 when given the string "AEIOU"', () => {
    const actual = vowelCounter("AEIOU")
    const expected = 5;

    assert.equal(actual, expected);
  });

  it('it returns null when not given a parameter', () => {
    const actual = vowelCounter()
    const expected = null;

    assert.equal(actual, expected);
  });

  // 02 and now we run our tests and let them guide us
  // 02 first one: cannot find module '../vowel_counter'
  // 02 so we can fix this
  // 02 touch vowel_counter.js and we will run again
  // 02 typeError vowelCounter is not a function
})