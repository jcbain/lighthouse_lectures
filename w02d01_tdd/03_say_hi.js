const sayHi = (name) => {
  return `Hi there, ${name}`;
};
// 00 well first we need a way to get this function out
// console.log(module.exports)

// 01 well we can overwrite this object
// 01 to export our our functions
module.exports = sayHi;

// 01 which we can now use other places

// 02 show the different ways we can export our code
// 02 using keys on an object


// 03 show module wrapper ==> go back to outline.md