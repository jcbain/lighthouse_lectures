const net = require('net');

// create a client that connects to a server
// at a given ip and port
const client = net.createConnection({ 
  host: 'localhost',
  port: 3001
});

// set the encoding for the incoming messages to the
// client
client.setEncoding('utf8')

// when the client recieves data from the server
// console log it
client.on('data', (data) => {
  console.log(data)
});

// react to the connection of the server
// and within the connection react to
// input standard input and write that back 
// to the server
client.on('connect', () => {
  process.stdin.on('data', data => {
    client.write(data)
  })
})

// once disconnect, tell the client
// they are disconnected and end the
// process session
client.on('end', () => {
  console.log('disconnected from server');
  process.exit()
});


