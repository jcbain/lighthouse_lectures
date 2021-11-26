// 00 so just to try this out
// 00 npm install chai --save-dev
// 00 then our object is also called assert
// 00 but we need to pull it off of the main require
// 00 and change equal to strictEqual
// const assert = require("assert").strict;
const assert = require('chai').assert
const vowelCounter = require("../07_vowel_counter");


describe('tests for vowelCounter', () => {
  it('it returns 3 when given the string "orange"', () => {
    const actual = vowelCounter("orange")
    const expected = 3;

    assert.strictEqual(actual, expected);
  });

  it('it returns 5 when given the string "lighthouse labs"', () => {
    const actual = vowelCounter("lighthouse labs")
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('it returns 5 when given the string "aeiou"', () => {
    const actual = vowelCounter("aeiou")
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('it returns 5 when given the string "AEIOU"', () => {
    const actual = vowelCounter("AEIOU")
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('it returns null when not given a parameter', () => {
    const actual = vowelCounter()
    const expected = null;

    assert.strictEqual(actual, expected);
  });


})