// 00 now we just need to change our config to 
// 00 have those environment variables
const pg = require('pg');

const Client = pg.Client;
// 01 and now if we do this, everything should be working
const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};

const client = new Client(config);

client.connect(() => {
  console.log('🔌 connected to the db')
});


module.exports = client;


