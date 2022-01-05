// 00 so now we will move on to the behavior of edit
// 00 and so we can think of an example
// 00 imagine that we didn't think 'James' was the name of our human primate
// 00 instead it was 'Cornelius'
// 00 well we would want to type in something like `node cl_query.js edit 4 Cornelius`

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
    // const id = process.argv[3];

    client.query('SELECT * FROM primates WHERE id = $1;', [id])
      .then((results) => {
        console.log(results.rows[0]);
        client.end();
      })
    break;
  
  // 01 so we add a new case
  // 01 we know this one takes 2 parameters so we need to
  // 01 pull those values off
  case 'edit':
    // 02 oh no (syntax error)
    // 02 switch cases don't create the own name spaces
    // 02 so let's pull this to a variable above the switch and close over it
    // const id = process.argv[3];
    const newName = process.argv[4];

    // 03 but what will come back without a returning *?
    client.query('UPDATE primates SET name = $1 WHERE id = $2;', [newName, id])
      .then((results) => {
        console.log(results.rows);
        client.end();
      })

    break;

  default:
    console.log('enter a valid verb')
    client.end();
};

// 04 and now we want to add our 'add' behavior
