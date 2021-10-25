// now, what if we wanted to deliniate who was sending the data
// as a client when they connect so that we can see who wrote what message?
const net = require('net');
// bring in our helpers
const {generateRandomEmoji, generateRandomId } = require('./helpers')

const port = 3001;

const server = net.createServer()

server.on('connection', (client) => {
  // well remember, client is just an object
  // so once they connect, we can actually add data to that
  // object

  // lets do that
  // we have 2 helper functions, one that generates a random id 
  // and another that generates a random emoji
  client.id = generateRandomId();
  client.avatar = generateRandomEmoji();
  // now, these aren't production level solutions, but for our 
  // toy app they work

  client.setEncoding('utf8')
  
  // now we can change our previous statement when someone connects
  // and use our new user attributes
  console.log(`\t${client.avatar} ${client.id} is connected!`)

  // we can also notify our user that their id
  // and avatar has been set
  client.write('🦜 hello from the server\n')
  client.write(`🦜 your avatar is ${client.avatar} and your id is ${client.id}\n`)

  // now, we can also change data coming in from the client, 
  // so that we know who typed what when it is recieved by 
  // the server
  client.on('data', (data) => {
    // console.log(`a user sent some data: ${data}`)
    console.log(`${client.avatar} ${client.id}: ${data}`)
  })

})


server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`);
});