// 00 we'll chat about why our connection is insecure after we hack
// 00 ourselves. We know that everything that comes in from the command line
// 00 is a string and if we surround one of the arguments with quotes
// 00 then that is processed as one argument
// 00 so what if i did...
// 00 `node cl_query.js read '1; DELETE FROM primates WHERE id = 4;'`
// 00 or...
// 00 `node cl_query.js read '1; DROP TABLE primates;'`
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

  case 'read':
    const id = process.argv[3];
    // 01 so we just took the information and the statement below became
    // 01 SELECT * FROM primates WHERE id = 1; DELETE FROM primates WHERE id = 4;

    // 02 so how do we protect ourselves? Never use a template literal for your query.
    // 02 so we will remove it and replace it by sending along the query and the data 
    // 02 as two separate packages. This looks kind of strange, but 
    // 02 we will start with an array as the second paramenter, and then a 1-indexed
    // 02 position for where that data need to be inserted
    client.query('SELECT * FROM primates WHERE id = $1;', [id])
      .then((results) => {
        console.log(results.rows[0]);
        client.end();
      })
    break;

    // 03 now when we run this we and attempt to hack
    // 03 we get a different error (invalid syntax for integer)
    // 03 which means the value I provided was not an integer
    // 03 which is what the database is looking for. No longer
    // 03 am I adding another query,  but instead, sending along
    // 03 a single value

    // 04 and this is all you have to do to prevent sql injection
    // 04 attacks
    
  default:
    console.log('enter a valid verb')
    client.end();
};
