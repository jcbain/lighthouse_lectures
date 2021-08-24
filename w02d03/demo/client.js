const net = require('net');

const client = net.createConnection({
  port: 3001,
  host: 'localhost'
})

client.on('connect', () => {
  console.log('you have connected to the server')
  process.stdin.on('data', data => {
    client.write(data)
  })
})
