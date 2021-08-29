const http = require('http');

const server = http.createServer((request, response) => {
  response.write('hello world')
  response.end();
});

server.listen(23456, () => {
  console.log(`listenig on port 23456`)
})