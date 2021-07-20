// up until we've primarily been working with 
// one way to write a function
// function expression

// const sayHello = function(name) {
//   console.log(`hello there, ${name}`);
// };

// sayHello('James');


// there is also function declaration syntax
// sayGoodbye('James');

// function sayGoodbye(name) {
//   console.log(`bye bye, ${name}`);
// };

// and finally, there are arrow functions
// the syntax of which you may have seen before

const sayHello = (name) => {
  console.log(`hello there, ${name}`);
}

sayHello('Doug')

// if there is only one parameter, you can exclude the parentheses
// around the parameter

const sayGoodbye = name => {
  console.log(`bye bye, ${name}`);
}

sayGoodbye('Lynn')

// single liners don't use curly braces and have implict returns

const addTwo = num => num + 2;

console.log(addTwo(4))

// we can also pass them to other functions

const yellAtJames = function(anotherFunc) {
  const statement = anotherFunc('James');
  return `${statement.toUpperCase()}!!!`
}

// const result = yellAtJames((name) => {
//   return `get out of here, ${name}`
// })

const result = yellAtJames(name => `eat watermelon, ${name}`);

console.log(result)

// is there anything that an arrow function can't do?
// it doesn't have access to `this`

const person = {
  firstName: 'Kate',
  lastName: 'Bobblehead',
  sayFullName: () => console.log( `my name is ${this.firstName} ${this.lastName}`)
}
person.sayFullName()

