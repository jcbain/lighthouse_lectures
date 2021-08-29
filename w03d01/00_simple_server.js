// now, we have worked with pulling in other modules into
// our applications
// well, node ships with a module for us to get our feet wet 
// with creating web servers
// show http node documentation
// particularly the createServer method

// bring in http
const http = require('http');

// show the callback function because this is asynchronous
// the request listener callback will be called anytime
// a client makes a request to our server

// this function, createServer will also give us 
// back an Server instance
const server = http.createServer((request, response) => {

  // for now, if someone makes a request, lets just write something 
  // to them from our server
  response.write("Hello world!")

  // show after first demo of the app
  // we have to tell our client here, that our response
  // is done. 
  response.end()
  // show developer tools and how we can monitor the activity
  // show how all requests are doing the exact same thing

});

// now we aren't quite done yet, we now have explicitly
// state which port our server will be listening on
server.listen(3456);