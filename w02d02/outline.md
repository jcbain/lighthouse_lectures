# W02D02 - Ansynchronous Control Flow

## Preamble
- Discuss objectives

## Recap callbacks
- What is a callback? A function passed as an argument to another function to be called within that function

- create a quick `myForEach` HOF that takes a callback that get's passed each element in an array as well as the index using c-style for loop.

- show how we can name a function or pass an anonymous function for the higher order function to be called.

## Blocking code

- Is JavaScript synchronous or asynchronous? Synchronous, single-threaded (one process is executed at a single time)

- show example with console.logs

- What is blocking code? Expensive operations that block the rest of the code from running. This could be a network request, or a database call, reading or writing data

- run a c style for loop to demonstrate blocking code. 


## Asynchronous control flow and setTimeout
- How can we get blocking code out of the way? Asynchronous functions.

- Show mdn on setTimeout. Takes a function and an optional delay.

- What happens if I run a second one? Make the delay less time? 

- now insert synchronous code before and after each timeout. What is the order?

- Bring back expensive operation and ask what will go first?

- Describe line analogy for asynchronous callbacks.

- Remove optional delay and ask what will go first and inspect the return value from the setTimeout

## Returning values

- Let's recap our understanding of asynchronous callbacks and when they get moved to the callstack.

- Create a higher order function that creates some data and invokes a setTimeout which inside of it invokes the callback passed to the higher order function. Remember, we don't care what the callback does. All we are responsible for is calling it.

- Put some more `console.log`s and ask the order that they will appear

- Return to the data mutation. Now ask how we can get our data out?

- With asynchronous callbacks, we have to get it out of our heads that we will be `return`ing a value. Instead, we can pass a value to our callback and pass it through our application that way.

## setInterval

- so setTimeout is a good example of how async functions can emulate an expensive operation. They take a delay and after that delay has passed and the callstack is free, it will execute.

- however, `setInterval` is more common in the wild. It is good for polling where every so often you want to run a callback to see if something in your application has changed.

- it is setup just like `setTimeout`. 

- show example of updating a value in scope for each iteration.

- Show how to create a handle for the setInterval so that we can clear the interval.

- bring synchronous logic test first.

- move up into the callback argument to stop interval.

## File System

- show them node documentation for file system

- describe built in modules / node modules / modules you create and how to require them

- show the two methods `readFileSync` and `readFile`.

- bring in index.html and show lorem100 generator

- demonstrate readFileSync first without specifying encoding. 

- Say that it returns a buffer, which allows us to work with binary data since that is how computers work. Returns hexadecimal (base 16 encoding)

- but our file is encoded in utf-8.

- show asyn `readFile` and discuss err first callback.

- what happens if we don't put a return?