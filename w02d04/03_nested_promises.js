const promiseFunctions = require('./promise_generator');

const resolvePromise = promiseFunctions.resolvePromise;
const rejectPromise = promiseFunctions.rejectPromise;

// it may be tempting to do this
// but now we've just recreated callback hell
// also, we need a separate catch for each promise clause
resolvePromise("one")
  .then((data) => {
    console.log(data)
    resolvePromise("two")
      .then((data) => {
        console.log(data)
        resolvePromise("three")
          .then((data) => {
            console.log(data)
            rejectPromise("four")
              .then((data) => {
                console.log(data)
              })
              .catch(err => console.log(err))
            })
      })
  })