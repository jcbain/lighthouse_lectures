const net = require('net');
const { generateRandomEmoji, generateRandomId } = require('../helpers');

// a list of clients
const listOfClients = [];

// functions to write back to client what they are saying
const writeBack = (data, client) => {
  client.write(`🦜: ${data}`)
}

const writeBackToEveryone = (data, client, listOfClients) => {
  for(const currentClient of listOfClients) {
    if(currentClient.id !== client.id) {
      currentClient.write(`\t${client.avatar}: ${data}`)
    }
  }
}

const server = net.createServer()

server.on('connection', client => {
  // add some attributes to deliniate clients
  client.id = generateRandomId();
  client.avatar = generateRandomEmoji();

  // add client to the list of clients
  listOfClients.push(client)

  // log to the server that a new client has connected
  console.log(`\t${client.avatar} ${client.id} is connected!`)

  // set the encoding
  client.setEncoding('utf8')

  // write to the client a welcome message
  client.write('🦜 hello there from the server\n')
  client.write(`🦜 your avatar is ${client.avatar} and your id is ${client.id}\n`)

  // handle the event that a client sends data to the server
  client.on('data', data => 
    console.log(`${client.avatar} ${client.id}: ${data}`)
  )
  client.on('data', data => {
    // broadcast
    writeBackToEveryone(data, client, listOfClients)
  })

})

server.listen(3001, function(){
  console.log('we are listening')
})