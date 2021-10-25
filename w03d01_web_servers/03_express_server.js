// let take a look at the express documentation
// once you are ready, 
// run npm init -y 
// creates a package json but i don't want to answer any of the
// setup questions. just go with defaults

// now we can install express

const express = require('express');

// show hello world example in express documentation
// so students know why i used app
const app = express();

// i want to create a get request /home
// GET /home
// the second argument fires, every single time someone
// makes this request
app.get('/home', (req, res) => {
  // we can send up a message
  res.write('welcome to the home page')
  // but once again we have to end the response
  // in express, it is res.send()
  res.send();
});

// finally the last thing we need to do with our server is 
// makes sure it is listening for incoming requests on 
// some port
app.listen(6789)

// then show when we just go to /
// this is good the cannot get. it suggests that our 
// server is running and we just made a request that
// our server doesn't handle.

// show devtools and the 404

// now go to /home and show the 200