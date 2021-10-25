// now how do we go about writing something to a client
// when they connect
const net = require('net');
const port = 3001;

const server = net.createServer()

// well what we want to do is listen for when a connection
// to our server is made
// show different events
server.on('connection', (client) => {
  // what should we do 
  // well we can console.log the client just to see what it returns
  // console.log('client what are you?', client)
  // we get a socket or an open connection between the client and the server
  client.setEncoding('utf8')
  console.log('someone connected to the server')
  // we can use the write to write to our client once they connect
  client.write('🦜 hello from the server\n')
})


server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`);
});