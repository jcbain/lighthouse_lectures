// so i mentioned earlier that a webserver controls
// some data that we are going to send back to the client.
// lets create some now


// now we have some data that our users can interact with
// let's take a moment and reflect back on our verbs
// if i wanted to see all of our dogs, what verb is that?
// a GET because a GET is a request to see a resource
// we aren't modifying it



const express = require('express');

const app = express();

// for now, we're are just going to create some in-memory data
// which will persist as long as the server is running.
// later on we will teach databases and how we can
// move our data away from in memory storage

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

// then we have to think of a path. It wouldn't 
// make sense if we said GET /users and got back a bunch of dogs

app.get('/home', (req, res) => {
  res.write('welcome to the home page')
  res.send();
});

// it would make more sense to do a GET /dogs
// to get all of the dogs
app.get('/dogs', (req, res) => {
  // now all i want to do is send that data back
  // to the users

  // res.send() sends back a string
  // res.sendFile() sends back a file
  // res.render() renders a server side template and sends it back
  // however we want to send back some json
  res.json(dogs)
  // start server
  // show network --> preview
  // we just sent raw data back to the client
  // however there are a variety of ways you can 
  // respond to a request, and we will teach you that
  // but for this we are just going to show you what's possible
})

app.listen(6789)
