// what if we wanted to create our own client code
// that is capable of connecting to the our server?

// checkout createConnection in net
const net = require('net')
const readline = require('readline');

// we will be dealing with standar input
const rl = readline.createInterface({
  input: process.stdin,
})

const client = net.createConnection({
  host: '127.0.0.1',
  port: 3001
})

// at this point, we can actually use this script to 
// connect to our server if it is running. 
// let's test it out

// now we need a way to get data that is coming in from our server
// first i am going to set the encoding for when the client recieves data
client.setEncoding('utf8')

// when the client recieves data from the server
// console log it
client.on('data', (data) => {
  console.log(data)
});
// okay, we can now test this 

// cool now we are actually recieving data from our server
// but how do we go about writing data to the server?


// once we are connected, we want to listen
// using standard input for the input we type in
// once we type in the terminal, we want to 
// client.write the data which will write it to the server
rl.on('line', (input) => {
  client.write(`${input}\n`);
})
// client.on('connect', () => {
//   process.stdin.on('data', data => {
//     client.write(data)
//   })
// })

// finally, when the connection closes from the server
// we want to stop taking standard input
client.on('end', () => {
  console.log('disconnected from server');
  rl.close();
  // process.exit()
});

// and now, we have essentially created our own client
// that can interact with our chat server

