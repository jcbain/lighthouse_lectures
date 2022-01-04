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
  user: 'sfljbfvz',
  host: 'kashin.db.elephantsql.com',
  database: 'sfljbfvz',
  password: 'z8_NANXGDQ1D6pLTRwKY85GVSE235Xtf',
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
    client.query(`SELECT * FROM primates WHERE id = ${id};`)
      .then((results) => {
        console.log(results.rows[0]);
        client.end();
      })
    break;
    
  default:
    console.log('enter a valid verb')
    client.end();
};
