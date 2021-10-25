## Preamble
- brief introduction
- feel free to ask questions if you have them throughout the lecture by either raising your hand or chat.

## Outline


### Functions as values

The concept of a key-value pair is everywhere in JavaScript. Conceptually there is no difference between saying that your variable name is your key and you value is the value assigned to that variable and...

```js
const firstName = "james" // key and value
```

something like an object where you have a key in the object and its assigned value

```js
const person = {
  name: 'james'
}
```

Therefore, it can be extended to functions such that what's on the left hand side of the function expression is the key and what's on the left is the value

```js
const sayHello = function(name) {
  console.log(`hello, ${name}`)
}
```

So, when you say a variable's name, you get back it's value.

```js
const firstName = "james"
const otherName = firstName;
console.log("otherName", otherName);
```

The same is true for functions...

```js
const sayHello = function(name) {
  console.log(`hello, ${name}`)
}

const printHello = sayHello;
printHello('Carl');
```

### Passing Functions to Functions

Since functions are just objects, and we've proven that, then we should be able to pass a function as an argument to another function.

So let's create a function that takes another function as a parameter.

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

Let's first think of an analogy. Functionally, the following examples are the same. Since passing the variable `firstName` to `sayHello()` passes the value it is the same thing as just passing an unnamed variable to `sayHello()`. In other words, it can be thought of as being passed anonymously.

```js
const sayHello = function(name) {
  return `hello, ${name}`;
}

const firstName = "Jimbo";
sayHello(firstName);
sayHello("Jimbo");
```

We can do the same thing with callbacks to pass them anonymously...

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

We've been using function expressions to write functions in javascript up until this point. However, from now on, you will probably start seeing this new syntax known as arrow functions.

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

### Higher order functions
Let's build a function that takes in a callback. 

We can start with an array and let's just loop over it.
```js
const creatures = ['bigfoot', 'yeti', 'pizza the hut'];

for (const creature of creatures) {
  const phrase = `hello, ${creature}`;
  console.log(phrase);
}

```

Looping over an array of elements is a very generic task but the inner task is very specific. If we consider the inner part of the loop as behavior, it means we can actually put it in a function.

```js
const sayHello = (creature) => {
  const phrase = `hello, ${creature}`;
  console.log(phrase);
}

for (const creature of creatures) {
  sayHello(creature)
}

```

But how about the generic part? If we know we are wanting to perform some action over all the elmenents in an array, well we could take a step back and make a function that can operate on "any" array.

```js
const loopOverArray = (arr, callback) => {
  for (const element of arr) {
    callback(element)
  }
}

// this is a higher order function because it takes a callback as a parameter
// this callback is called on each element in the array passed 
loopOverArray(creatures, sayHello)
loopOverArray(['prairie', 'pippa', 'floppy'], (pet) => console.log(`my pet's name is ${pet}`))

```