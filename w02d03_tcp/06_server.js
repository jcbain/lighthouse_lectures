// now how about instead of just parroting back
// what our client say back to the client,
// how about we broadcast our messages from the client
// back to all of the clients

const net = require('net');
const {generateRandomEmoji, generateRandomId } = require('./helpers')

// how might we do that?
// well first we need to keep a collection of clients
// how about storing them in an array
const listOfClients = [];

const writeBack = (data, client) => {
  client.write(`\t🦜: ${data}`)
}

const writeToAllClients = (data, client, listOfClients) => {
  for(individualClient of listOfClients) {
    // using the current client (client parameter)
    // that is writing we can write to our list of clients
    // what the current client said
    individualClient.write(`\t${client.avatar}: ${data}`)
  }
}

const port = 3001;

const server = net.createServer()

server.on('connection', (client) => {

  client.id = generateRandomId();
  client.avatar = generateRandomEmoji();
  
  // and now, everytime a client connects their 
  // connection is pushed to our collection
  listOfClients.push(client)

  // well okay, now we need to actually handle
  // writing to each client

  client.setEncoding('utf8')
  
  console.log(`\t${client.avatar} ${client.id} is connected!`)

  client.write('🦜 hello from the server\n')
  client.write(`🦜 your avatar is ${client.avatar} and your id is ${client.id}\n`)

  client.on('data', (data) => {
    console.log(`${client.avatar} ${client.id}: ${data}`)
  })


  client.on('data', (data) => {
    // we can replace our writeBack
    // with our writeBackToAllClients
    // writeBack(data, client)
    writeToAllClients(data, client, listOfClients)
  })

})


server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`);
});