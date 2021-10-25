// but is kind of odd that a client who writes
// also gets their message back


const net = require('net');
const {generateRandomEmoji, generateRandomId } = require('./helpers')

const listOfClients = [];

const writeBack = (data, client) => {
  client.write(`\t🦜: ${data}`)
}

const writeToAllClients = (data, client, listOfClients) => {
  for(individualClient of listOfClients) {
    // so in here we can check if the individualClient in the iteration
    // is equal to the current client writing
    if(individualClient.id !== client.id) {
      individualClient.write(`\t${client.avatar}: ${data}`)
    }

  }
}

const port = 3001;

const server = net.createServer()

server.on('connection', (client) => {

  client.id = generateRandomId();
  client.avatar = generateRandomEmoji();
  
  listOfClients.push(client)


  client.setEncoding('utf8')
  
  console.log(`\t${client.avatar} ${client.id} is connected!`)

  client.write('🦜 hello from the server\n')
  client.write(`🦜 your avatar is ${client.avatar} and your id is ${client.id}\n`)

  client.on('data', (data) => {
    console.log(`${client.avatar} ${client.id}: ${data}`)
  })


  client.on('data', (data) => {
    writeToAllClients(data, client, listOfClients)
  })

})


server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`);
});