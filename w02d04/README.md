# W02D04 - Promises

## Objectives
- [ ] Illustrate the "callback hell" (callback waterfall) problem
- [ ] Introduction to Promises
- [ ] Error handling with Promises (vs callbacks)
- [ ] Parallelizing async things (Promise.race and Promise.all)
- [ ] Creating our own Promises

## What is a Promise
- Promise is a JS object
- A Promise can exist in 1 of 3 states 
  - Pending
  - Fulfilled => resolved 
  - Failed    => rejected

promises give us the ability to avoid callback hell

```js
// nested callbacks
higherOrderFn((dataOne) => {
  callbackTwo((dataTwo) => {
    callbackThree((dataThree) => {
      callbackFour((dataFour) => {
        // do something
      });
    });
  });
});

// promises
functionOneReturningPromise()
  .then(() => {
    return functionTwoReturningPromise();
  })
  .then(() => {
    return functionThreeReturningPromise();
  })
  .then(() => {
    return functionFourReturningPromise();
  })
  .then(() => {
    // do something
  });
```

## Errors

with asynchronous functions. For every invocation of the function, each error has to be handled in some way.
```js
// asynchronous function method
someFunction((err, data) => {
  if (err) {
    return console.log(err)
  }
  someFunction((err, data) => {
    if(err) {
      return console.log(err)
    }
    someFunction((err, data) => {
      return console.log(err)
    })
  })
})
```

now with promises. If any of these promises in this chain fail, then they are caught in the one `.catch` method at the bottom
```js
somePromise('one')
  .then((data) => {
    console.log(data)
    return somePromise('two')
  })
  .then((data) => {
    console.log(data)
    return somePromise('three')
  })
  .catch((err) => {
    console.log(err)
  })
```

### Running Async Operations in Parallel
- Instead of waiting for each operation to resolve before moving on to the next one, we can run them in parallel with methods like `Promise.all` and `Promise.race`
- These methods accept something that can be iterated over as an argument (usually an array)
- `Promise.all`: Waits for **all** of the promises to resolve/reject
- `Promise.race`: Waits for **any** of the promises to resolve/reject

```js
const promises = [promiseOne, promiseTwo, promiseThree];

Promise.all(promises)
  .then((arrayOfResults) => {
    console.log('results', arrayOfResults.join(', '));
  })
  .catch((error) => {
    throw error;
  });

Promise.race(promises)
  .then((firstResult) => {
    console.log('result of the first promise to resolve', firstResult);
  })
  .catch((error) => {
    console.error('error from the first promise to reject', error);
  });
```

### Creating Promises
- A new promise can be created using the `Promise` class
- The `Promise` constructor takes a callback that accepts two functions as arguments:
  - `resolve`: This callback is called when the operation has finished successfully
  - `reject`: This callback is called if the operation failed (usually with the error)

```js
const myPromise = new Promise((resolve, reject) => {
  // do something and resolve when finished or reject with an error
});

myPromise.then((data) => {
  // do something with the resolved promises data
});
```



