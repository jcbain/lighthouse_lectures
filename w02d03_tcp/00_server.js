// first checkout net package documentation
// look for createServer and show that it creates a TCP server

const net = require('net');
const port = 3001;

// create a server
const server = net.createServer()

// have the server start listening for connections
// then look at how it says we can try and connect
// using telnet 127.0.0.1 3001
server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`);
});

