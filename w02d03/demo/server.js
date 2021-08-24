const net = require('net');

const server = net.createServer()

server.on('connection', client => {
  console.log('someone connected!')
  client.setEncoding('utf8')
  client.on('data', data => console.log(data))
})

server.on('close',function(){
  console.log('Server closed !');
});

server.listen(3001, function(){
  console.log('we are listening')
})