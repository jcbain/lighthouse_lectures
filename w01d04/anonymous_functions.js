// so in the previous example we wrote a function
// and passed it to the yellAtJames function
const sayHello = function(name) {
  return `Hello, ${name}`;
}

// the yellAtJames function takes in another function
// in in the function body, calls the callback and passes
// "James" as a parameter of the callback. The result of the
// callback is then converted to uppercase in the higher-order function 
// return
const yellAtJames = function(anotherFunc) {
  const statement = anotherFunc('James');
  return `${statement.toUpperCase()}!!!`
}

// anonymous functions
// 

const result = yellAtJames(function(name) {
  return `You are awesome, ${name}`
});

console.log(result);

// out of scope
// immediately invoked function expression
// (function() {
//   console.log('hello')
// })();
