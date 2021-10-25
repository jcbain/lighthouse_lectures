// so how do we get our server to start parroting back
// our messages coming from the client back to the client?

const net = require('net');
const {generateRandomEmoji, generateRandomId } = require('./helpers')

// well we can create a function 
// that function will take in some data (in this case
// data coming from the client)
// and then send it back to the client

const writeBack = (data, client) => {
  client.write(`\t🦜: ${data}`)
}

const port = 3001;

const server = net.createServer()

server.on('connection', (client) => {

  client.id = generateRandomId();
  client.avatar = generateRandomEmoji();

  client.setEncoding('utf8')
  
  console.log(`\t${client.avatar} ${client.id} is connected!`)

  client.write('🦜 hello from the server\n')
  client.write(`🦜 your avatar is ${client.avatar} and your id is ${client.id}\n`)

  client.on('data', (data) => {
    console.log(`${client.avatar} ${client.id}: ${data}`)
  })

  // we can add another event listener
  // that listens for data being sent from our client
  client.on('data', (data) => {
    writeBack(data, client)
  })

})


server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`);
});