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
const result = yellAtJames(sayHello);

// now with an anonymous function
const anotherResult = yellAtJames(function(name) {
  return `You are awesome, ${name}`
});

console.log('passed function varibale', result);
console.log('passed anonymous function', anotherResult)

// python tutor

// out of scope
// immediately invoked function expression
// (function() {
//   console.log('hello')
// })();
