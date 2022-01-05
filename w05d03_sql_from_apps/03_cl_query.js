// 00 so what is this going to look like? well,
// 00 we will be running `node cl_query.js read 2`
// 00 and expecting the row with the id 2 to be returned
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

const verb = process.argv[2];

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM primates;')
      .then((results) => {
        console.log(results.rows);
        client.end();
      });
    break;
  
  // 01 well if the verb is read
  // 01 then we are expecting a theeth argument
  // 01 and then we write our query
  case 'read':
    const id = process.argv[3];
    client.query(`SELECT * FROM primates WHERE id = ${id};`)
      .then((results) => {
        // 02 now, every single .rows is going to be an array
        // 02 whether there be 2 rows, 1 row or 0 rows
        // 02 but what if we just want the object since we know 
        // 02 there should only be one
        console.log(results.rows[0]);
        client.end();
      })
    break;
    
  default:
    console.log('enter a valid verb')
    client.end();
};

// 03 oh but we have a big problem
// 03 let us hack our database
