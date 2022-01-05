// 00 with our add, we are adding a record to our database
// 00 so it will look something like 
// 00 `node cl_query.js add 'Gibon' 'Genie'` 
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
const id = process.argv[3];


switch (verb) {
  case 'browse':
    client.query('SELECT * FROM primates;')
      .then((results) => {
        console.log(results.rows);
        client.end();
      });
    break;

  case 'read':

    client.query('SELECT * FROM primates WHERE id = $1;', [id])
      .then((results) => {
        console.log(results.rows[0]);
        client.end();
      })
    break;
  
  case 'edit':
    const newName = process.argv[4];

    client.query('UPDATE primates SET name = $1 WHERE id = $2;', [newName, id])
      .then((results) => {
        console.log(results.rows);
        client.end();
      })

    break;

  // 01 now we need to add a new case
  // 01 add use those arguments
  // 01 and build out our insert query
  case 'add':
    const species = process.argv[3];
    const name = process.argv[4];

    client.query('INSERT INTO primates(species, name) VALUES($1, $2);', [species, name])
      .then(() => {
        console.log('primate created');
        client.end();
      })
    break;

  default:
    console.log('enter a valid verb')
    client.end();
};

// 02 and now we are ready for delete
