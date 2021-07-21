# W01D04 - Callbacks

## Objectives
- [ ] functions as values
- [ ] calling a function vs. passing a function
- [ ] callbacks!
- [ ] anonymous functions
- [ ] arrow functions
- [ ] higher order functions

### Functions as values


What's on the left hand side of a function expression is just a value. This value can be extended to passing them along to another variable.

```js
const sayHello = function(name) {
  console.log(`hello, ${name}`)
}

const printHello = sayHello;
printHello('Carl');
```

### Passing Functions to Functions

- functions can be passed as arguments to other functions


```js
const sayHello = function(name) {
  return `hello, ${name}`;
}
const yellAtJames = function(anotherFunction) {
  const phrase = anotherFunction('james');
  const phraseYelled = phrase.toUpperCase();
  return `${phraseYelled}!!!`
}

const result = yellAtJames(sayHello);
console.log(result);
```

Functions that are passed to functions are called `callbacks`. In other words, a callback is a function that gets passed to another function to be invoked in a function.

### Anonymous functions


- we don't have to pass a function variable to a higher order function as a callback but instead, we can pass an unnamed (anonymous) function directly inline.

```js
const yellAtJames = function(anotherFunc) {
  const statement = anotherFunc('James');
  return `${statement.toUpperCase()}!!!`
}

// anonymous functions

const result = yellAtJames(function(name) {
  return `You are awesome, ${name}`
});

console.log(result)
```

### Arrow functions

- Arrow functions give us a syntactic alternative to using the function keyword
- There are some gotchas around using the `this` keyword inside an arrow function, but if you aren't using `this`, arrow functions can be used interchangeably with "regular" functions
- Arrow functions are often used as callbacks because they are shorter/cleaner to type


```js
// function expression
const sayHello = function(name) {
  console.log(`hello there, ${name}`);
};

sayHello('James');
```
```js
// arrow function
const sayHello = (name) => {
  console.log(`hello there, ${name}`);
}

sayHello('Doug')
```
