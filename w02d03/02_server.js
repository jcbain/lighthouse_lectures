// now what if we want to take in the data of a client types to us
// and print it out on the server?
const net = require('net');
const port = 3001;

const server = net.createServer()

server.on('connection', (client) => {
  
  client.setEncoding('utf8')
  
  console.log('someone connected to the server')
  client.write('🦜 hello from the server\n')

  // show the on data event docs
  // show that when the client writes some data
  // we can actually print it out on the server
  
  client.on('data', (data) => {
    console.log(`a user sent some data: ${data}`)
  })

})


server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`);
});