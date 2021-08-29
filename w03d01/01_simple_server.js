// so we saw that every single response coming in 
// was being responded to in the exact same way
// so how about we actually look at any incoming request
// how might we do that?
const http = require('http');

const server = http.createServer((request, response) => {
  // console.log! always your friend. Whenever you are unsure
  // or even if you are sure...console.log is your best friend
  // let's console.log the request. We can see what it is
  // console.log(request)
  // show that it is a massive object and you can mention something about the 
  // get request for favicon.ico
  // but find the url key and the method key

  const url = request.url;
  const method = request.method;

  // but generally we think of a request as a method and a path
  // so let's create a string that represents that
  // so we can start specifying different behaviors if someone 
  // visits different paths
  const requestInfo = `${method} ${url}`
  console.log(requestInfo)

  response.write("Hello world!")
  response.end()


});

server.listen(3456);