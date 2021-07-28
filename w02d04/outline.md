# Promises

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
  