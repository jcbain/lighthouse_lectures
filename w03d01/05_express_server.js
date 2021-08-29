// now, what if we just wanted to retrieve one dog from our data?
// remember music library where you had
// printPlaylist() and printPlaylists()
// print one vs print all?
// same here, what if we wanted to see all the dogs
// and also be able to see a single dog?
// what sort of information would we need to see a single dog?
// a KEY!!!


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

app.get('/home', (req, res) => {
  res.write('welcome to the home page')
  res.send();
});


app.get('/dogs', (req, res) => {
  res.json(dogs)
})

// if i wanted to retrieve a particular dog 
// i would do something like
// GET /dogs/abcd
// GET /dogs/efgh
// app.get('/dogs/abcd', (req, res) => {
//   // there's no magic here, we say what happens
//   // when someone requests this path
//   const dog = dogs.abcd;
//   res.json(dog);
// })
// // then we have to deal with the other one
// app.get('/dogs/efgh', (req, res) => {
//   const dog = dogs.efgh;
//   res.json(dog);
// })

// hopefully this is sending red flags off in your brain
// what happens if i have 10 cats (100, 1000, 10,000)?
// if we take a look at those two endpoints, what is different
// between the two? just the key
// express allows us to make a generic endpoint 
// where the id could be like a variable
app.get('/dogs/:dog_id', (req, res) => {
  // the colon makes this part of the request variable
  // now we want to grab the :dog_id value
  // remember that anything coming in from the request
  // will come along with the req object
  
  // :dog_id are known as url parameters
  // and req object gives us a way to interact with
  // thes parameters with an object req.params
  // console.log(req.params)
  // res.send('almost done')

  // we can see that we got back an object
  // where the key is dog_id and the value
  // at that key is whatever the user typed in
  // now we can grab that value and use it in our endpoint
  const dogId = req.params.dog_id;
  const dog = dogs[dogId];
  res.json(dog)

  // after you show a dog
  // ask what happens with a dog of no id?
  // now if we were building an actual app,
  // we can write out the logic to handle this scenario
  // if (!dog) ...send error code or something


})

app.listen(6789)