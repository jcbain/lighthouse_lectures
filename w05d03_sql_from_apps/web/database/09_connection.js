// 00 now what do i nee din that file, 
// 00 well all of the database configuration
// 00 and connection stuff

const pg = require('pg');

const Client = pg.Client;


const config = {
  user: 'usernameString',
  host: 'kashin.db.elephantsql.com',
  database: 'db_name',
  password: 'some_PasswordSt$ing',
  port: 5432,
};

const client = new Client(config);

client.connect(() => {
  console.log('🔌 connected to the db')
});

// 01 then all we have to do is export it
// 01 so we can require in our connection to another file
module.exports = client;

// 02 and now we can also create a queries file as well
// 02 to encapsulate all of our queries in a given file
// 02 touch database/queries.js
