// create a function that delivers a greeting to a variable person
const sayHello = function(name) {
  return `Hello, ${name}`;
}

console.log(sayHello('Lisa'))

// do you think we can pass a function as a parameter to another function?
// how about a function that takes in another function (callback) that produces
// a salutation to "James" and transfers the output of the call back to a yell
const yellAtJames = function(anotherFunc) {
  const statement = anotherFunc('James');
  return `${statement.toUpperCase()}!!!`
}

console.log(yellAtJames(sayHello))

// why don't we invoke the function as we pass it as a param?
// console.log(yellAtJames(sayHello('James')))

const sayGoodbye = function(name) {
  return `Get out of here, ${name}`;
}

console.log(sayGoodbye('Barb'))

console.log(yellAtJames(sayGoodbye))