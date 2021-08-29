// now this may start to ring some bells
// now that we know the type of request as well as 
// where the request is going and we have stored that in a variable
// we can use the variable to have our server behave in certain 
// ways depending on the request

const http = require('http');

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  const requestInfo = `${method} ${url}`
  console.log(requestInfo)

  // so let's make it respond differently 
  // if we have a /home or /about page
  if(requestInfo === 'GET /home') {
    response.write('you made it to the home page');
  } else if(requestInfo === 'GET /about') {
    response.write('you made it to the about page')
  } else {
    response.write('this isnt the page you are looking for')
  }

  // now we have a smarter app. 
  // so let's check it out
  // but you may be thinking that this seems really gross
  // what if we have 100s of routes
  // they would all have to be handled all in this single callback

  // now we could probably think of better solutions 
  // but instead, we're going to use a tried and true package
  // known as express

  // response.write("Hello world!")
  response.end()


});

server.listen(3456);