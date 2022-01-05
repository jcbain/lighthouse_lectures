// 00 delete is pretty simple
// 00 all we need is the id so it would look something like
// 00 `node cl_query.js delete 1`
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

  case 'add':
    const species = process.argv[3];
    const name = process.argv[4];

    client.query('INSERT INTO primates(species, name) VALUES($1, $2);', [species, name])
      .then(() => {
        console.log('primate created');
        client.end();
      })
    break;

  // 01 and we can add in our last case here
  // 01 for delete keeping in mind that we are
  // 01 grabbing the id above from argv[3]
  case 'delete':
    client.query('DELETE from primates WHERE id = $1;', [id])
      .then(() => {
        console.log('primate removed!');
        client.end();
      });
    break;
  // 02 so after we delete and then we add a new one
  // 02 what will the new id be now that we have removed one?

  default:
    console.log('enter a valid verb')
    client.end();
};

// 03 now we are going to build a server
// 03 mkdir web
// 03 cd web
// 03 npm init -y
// 03 npm i express morgan

