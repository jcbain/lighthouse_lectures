// so one of the fundemental functionalities
// that express provides us with is middleware
// what is middleware
// simply put, it is just a function that runs between
// the request and the response 
// demonstrate url encoded data
// email=j@example.com&password=1234 
// body-parser middleware
const express = require('express');

const app = express();

const dogs = {
  abcd: {
    name: 'Pippa',
    age: 9
  },
  efgh: {
    name: 'Prairie',
    age: 8
  }
}


// how do we add our own middleware
// all middleware is added to our app
// so we have to mention our app
// app.use is how we consume all middleware
// app.use takes a callback function that will
// be called before all incoming requests
app.use((req, res, next) => {
  // maybe we want to parse the body or check if user is logged in
  // we may want to do that for every request coming in
  // so how about we set up a way to console.log the incoming request
  // right now our server does nothing in terms of logs and that isn't very helpful
  console.log(`${req.method} ${req.url}`)
  // now show it hanging
  // still get a console.log but we are hanging, 
  // we haven't sent a response
  // we need to explicitly tell it to move onto the next thing
  next()
  // show the request repsone lifecycle here
})

app.get('/home', (req, res) => {
  res.write('welcome to the home page')
  res.send();
});


app.get('/dogs', (req, res) => {
  res.json(dogs)
})


app.get('/dogs/:dog_id', (req, res) => {
  const dogId = req.params.dog_id;
  const dog = dogs[dogId];
  res.json(dog)
})

app.listen(6789)