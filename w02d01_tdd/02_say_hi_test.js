// 00 and we want to pull out all of our code that involves 
// 00 testing out and put it into its own file
const assert = require("assert").strict;

// 01 but now we have to go grab out sayHi function 
// 01 because this file depends on it
// 01 and think about how annoying it was to copy and paste
// 01 our functions in lotide and if we made an update to 
// 01 it we had to change the function everywhere we copied it


// 02 but first we need a way to get the function out of say_hi.js
// 03 then after we export it from there
// 03 we need to import in here

const sayHi = require("./03_say_hi");


// 04 and this should now work
const result = sayHi('Jennifer')
const expected = "Hi there, Jennifer";

assert.equal(result, expected)

