# Promises

### Quick recap on async control flow
`recap.js`

### Demonstrate callback hell (waterfall)
- run the profile generator callback script since it was one of their exercises
- show code for callback
- then run the profile generator promises script and show that it is the same
- show code for promises
- *not knowing anything about this code, which script would you like to add a different question to?* 

### Introduction to Promises
- *What is a promise?*
  - *it's another way for us to handle asynchronous operations in javascript*
  - *unlike our asynchronous functions that use callbacks, we can actually return a value*
- *What exactly does a promise return?*
  - an object (a class which is a special type of object which you will learn about tomorrow)
  - it can exist in three states (give some sort of promise analogy)
    - pending
    - fulfilled => resolved
    - failed => rejected
- The very last thing we are going to do today is create our own promise
  - 99 times out of 100, we are going to use promises that others have created instead of creating our own
  - *Therefore, I think it's important that we talk about what they do and how they work before we get into how to create one*

### Intro to using Promises
- `00_intro.js`
- *I've created a file with several promises that I have written and I am just going to bring those functions into our scripts so that we can see the behavior of promises in action.*
- Take a look at `resolvePromise` and show that you can return the promise status when saving to a variable
- *How do we get the value of the promise once it returns?*
  - *we could wait it out?* nah
  - Like the async function, we can use a callback
  - unlike the async functions, promises come with a method to consume the value returned from the promise once it is resolved
- go back to `profile-generator-promise.js` and show `.then` what it is doing once the promise is resolved (Enter is pressed)
  - then mention that if you do a `return` in the callback of the then, that value can then be passed along as a promise to another `.then` (promise chaining)
  - this is similar to chaining array methods together

### Errors with promises
- first show the in Readme the pattern of handling errors with nested callbacks
- `01_errors_callbacks.js`
- demonstrate handling errors again with callbacks with the `fs.readFile`
- if an error is not handled properly, then then the entire application will hault execution. Remember, that is node's default behavior
- so you have to handle the errors each time
- `02_errors_promises.js`
- give a recap of promises fullfilling as well as how they run in the async queue
- then show what happens when we have a promise reject (node crashes/stops execution)
- add `.catch` so that we can handle the error
- demonstrate what happens when we move up the rejected promise up the chain
- *You can see one of the major benefits of using promises as we only have to error handle once*

### Nested promises
- Now, it is quite possible to end up in callback hell using promises.
- This is a demonstration on what to avoid
- `03_nested_promises.js`
- it is easy to think that we should just nest our promises but we can easily create callback hell
- also, separate catchs for each promises block

### Promise All
- `04_promise_all.js`
- talk about getting orders for a lot of people. They all make their orders, then I am responsible for picking them up.
- now I should only come back once I have all of the order, regardless of how long each of them take. Some may take 5 minutes, others may take 10 but I need to bring back all.
- enter in `Promise.all`
- show how to set up and talk about it
- *why is this cool?*
  - well, if the resolve of each are independent of one another, then it only takes as long as the longest promise takes to resolve
  - compare that to chaining, where it is at least cumulative for each promise
- so how do we choose between chaining and Promise.all?
  - well if the result of promise2 depends on promise1 then we need to chain them 
  - otherwise we can just start them all 
- DON'T FORGET TO SHOW WHAT HAPPENS IF WE THROW IN A REJECTED PROMISE

### Promise race
- `05_promise_race.js`
- perhaps useless, or perhaps a better way of saying it is one of the most rarely used methods that you will encounter
- create a random delay generator
- `Promise.race` will return the first of promise to resolve or reject.
- why? perhaps you are getting data from multiple sources and you don't care which one resolves first because they all essentially provide the same meaning. 

### Creating a promise
- Again, we are touching on this very last because it is rare day in which you are actually creating your own promise.
- It is much more common that you will be handed a promise (fetching from a database, making a ajax call to a web server, etc) and you will have to consume the promise
- `06_creating_promises.js`
- after describing how to create a promise, then show the promise_generator.js file

### Big take aways
- to consume a promise, you call `.then`
- to handle an error you call `.catch`
- you can pass promises along and consume them in different files
- it is okay to not completely understand. Promises are difficult to grasp