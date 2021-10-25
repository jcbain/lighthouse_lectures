// finally, we are going to bring in a piece of 
// developed middleware, morgan
// show documentation npm morgan

// just request logger middleware
// so what we are doing with a bit more detail
// now we just install it

const express = require('express');
const morgan = require('morgan');

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

// now to use morgan, it takes some configuration
// we can have different types of logs

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`)
//   next()
// })
// console.log(morgan('dev').toString())
app.use(morgan('dev'))

// now fire up and show
// show a good request /home
// a bad request /about
// go to /dogs
// we got a 304 
// show http cats

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